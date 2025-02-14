import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button"
import Alert from "./Alert";

const SecondInner = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      avatarUrl: '',
      about: ''
    });

    const [ticketData, setTicketData] = useState(null);
    const [errors, setErrors] = useState({}); 
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
      // Load both form data and ticket data
      const savedFormData = localStorage.getItem('conferenceFormData');
      const savedTicketData = localStorage.getItem('ticketSelectionData');
      
      if (savedFormData) {
        setFormData(JSON.parse(savedFormData));
      }
      if (savedTicketData) {
        const parsedTicketData = JSON.parse(savedTicketData);
        if (!parsedTicketData.ticketType) {
          // Redirect back if no ticket type was selected
          navigate('/');
          return;
        }
        setTicketData(parsedTicketData);
      } else {
        // Redirect back if no ticket data exists
        navigate('/');
      }
    }, [navigate]);

    useEffect(() => {
      if (formData) {
        localStorage.setItem('conferenceFormData', JSON.stringify(formData));
      }
    }, [formData]);

    const validateForm = () => {
      const newErrors = {};
      
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full name is required';
      }
  
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
  
      if (!formData.avatarUrl.trim()) {
        newErrors.avatarUrl = 'Avatar URL is required';
      } 

      if (!formData.about.trim()) {
        newErrors.about = 'Please tell us about your project';
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      // First validate the form
      const isValid = validateForm();
      
      if (isValid) {
        try {
          const finalData = {
            personalInfo: {
              fullName: formData.fullName,
              email: formData.email,
              avatarUrl: formData.avatarUrl,
              about: formData.about
            },
            ticketInfo: ticketData,
            registrationDate: new Date().toISOString()
          };
          
          // Save the combined data
          localStorage.setItem('finalTicketData', JSON.stringify(finalData));
          
          // Clear the individual storage items
          localStorage.removeItem('conferenceFormData');
          localStorage.removeItem('ticketSelectionData');
          
          // Reset form
          setFormData({ fullName: "", email: "", avatarUrl: "", about: "" });
          
          // Navigate to ticket page
          navigate('/ticket');
        } catch (error) {
          setErrors(prev => ({
            ...prev,
            submit: 'Failed to generate ticket. Please try again.'
          }));
        }
      }
      
      setIsSubmitting(false);
    };

    const handleInputChange = (e) => {
      const { name } = e.target;
      
      // Special handling for file input
      if (name === "avatarUrl") {
        const file = e.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setFormData(prev => ({
            ...prev,
            [name]: imageUrl
          }));
        }
      } else {
        // Original handling for other inputs
        const { value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      }
    
      // Clear error for this field when user starts typing
      if (errors[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: ''
        }));
      }
    };
  
    return (
      <>
        <div className="border-1 ml-9 mr-9 mt-8 border-[#0E464F] rounded-3xl bg-[#08252B]">
          <form onSubmit={handleSubmit}>
            <div className="bg-[#052228] mb-7 rounded-2xl ml-5 mr-5 pb-5 mt-6 border-[#07373F] border-1">
                <p className="text-white ml-9 pt-3">Upload Profile Picture</p>
                <div>
                    <input
                      id="avatarUrl"
                      name="avatarUrl"
                      type="file"
                      placeholder="Drag and drop or click to upload"
                      onChange={handleInputChange}
                      className={`lg:ml-20 ml-10 mt-3 w-[70%] h-[50px] bg-[#0E464F] text-white rounded-2xl  outline-none ${
                        errors.avatarUrl ? 'border-2 border-red-500' : ''
                      }`}
                    />
                    {errors.avatarUrl && <Alert message={errors.avatarUrl} />}
                    {formData.avatarUrl && (
                      <img
                        src={formData.avatarUrl}
                        alt="Profile preview"
                        className="w-24 h-24 rounded-lg mx-auto object-cover mt-2"
                        onError={(e) => {
                          e.target.src = '/api/placeholder/96/96';
                          setErrors(prev => ({
                            ...prev,
                            avatarUrl: 'Failed to load image. Please check the URL.'
                          }));
                        }}
                      />
                    )}
                </div>
            </div>
            <hr className="mb-5 mt-6 ml-5 mr-7 text-[#07373F] border-2"/>
        
            <div>
                <p className="text-white ml-9 mb-2">Enter Your Name*</p>
                <input 
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`border-1 ml-3 lg:ml-8 rounded-lg outline-none w-[90%] pb-4 pl-2 pt-1 text-white text-lg ${
                    errors.fullName ? 'border-2 border-red-500' : 'border-[#07373F]'
                  }`}
                />
                {errors.fullName && <Alert message={errors.fullName} />}
            </div>

            <div>
                <p className="text-white ml-9 mb-2">Enter Your Email*</p>
                <input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`border-1 ml-3 lg:ml-8 rounded-lg outline-none w-[90%] pb-4 pl-2 pt-1 text-white text-lg ${
                    errors.email ? 'border-2 border-red-500' : 'border-[#07373F]'
                  }`}
                />
                {errors.email && <Alert message={errors.email} />}
            </div>

            <div className="pb-5">
               <p className="text-white ml-9 mt-4 pb-2"> Tech Skill*</p>
               <textarea
                id="about"
                name="about"
                rows={4}
                value={formData.about}
                onChange={handleInputChange}
                className={`w-[88%] p-2 ml-3 lg:ml-9 rounded-md outline-none text-white ${
                  errors.about ? 'border-2 border-red-500' : 'border border-[#07373F]'
                }`}
                placeholder="Tell us about your Tech Skill"
               />
               {errors.about && <Alert message={errors.about} />}
            </div>
            
            <div className="flex ml-5 lg:ml-8 pb-8">
                <Button
                  to="/"
                  className="border-1 border-[#24A0B5] lg:px-20 hover:bg-[#2BA4B9] cursor-pointer"
                >
                    <p className="text-[#24A0B5] hover:text-white">Back</p>
                </Button>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`border-1 px-30px border-[#24A0B5] lg:px-17 ml-5 hover:bg-[#2BA4B9] cursor-pointer ${
                    isSubmitting ? 'opacity-50' : ''
                  }`}
                >
                  <p className="text-[#24A0B5] hover:text-white">
                    {isSubmitting ? 'Generating Ticket...' : 'Get my Free Ticket'}
                  </p>
                </Button>
            </div>
            {errors.submit && <Alert message={errors.submit} />}
          </form>
        </div>
      </>
    );
}

export default SecondInner;