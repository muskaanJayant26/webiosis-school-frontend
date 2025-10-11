import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { EnquiryDialog } from "@/components/EnquiryDialog";
import schoolBg1 from "@/assets/school-bg-1.jpg";
import schoolBg2 from "@/assets/school-bg-2.jpg";
import schoolBg3 from "@/assets/school-bg-3.jpg";
import schoolBg4 from "@/assets/school-bg-4.jpg";
import schoolBg5 from "@/assets/school-bg-5.jpg";
import schoolBg6 from "@/assets/school-bg-6.jpg";
import schoolBg7 from "@/assets/school-bg-7.jpg";
import schoolBg8 from "@/assets/school-bg-8.jpg";
import schoolBg9 from "@/assets/school-bg-9.jpg";
import schoolBg10 from "@/assets/school-bg-10.jpg";
import schoolBg11 from "@/assets/school-bg-11.jpg";
import schoolBg12 from "@/assets/school-bg-12.jpg";
import schoolBg13 from "@/assets/school-bg-13.jpg";
import schoolBg14 from "@/assets/school-bg-14.jpg";
import schoolBg15 from "@/assets/school-bg-15.jpg";
import axios from "axios";

const backgroundImages = [
  schoolBg1, schoolBg2, schoolBg3, schoolBg4, schoolBg5,
  schoolBg6, schoolBg7, schoolBg8, schoolBg9, schoolBg10,
  schoolBg11, schoolBg12, schoolBg13, schoolBg14, schoolBg15
];

export const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    role: "",
    teacherName: "",
    phone: "",
    email: "",
    schoolName: "",
    state: "",
    medium: "",
    students: "",
    fees: "",
    consent: false,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://webiosis-school-backend.onrender.com/api/save",
        { ...formData, sheetName: "EduTransform" }
      );
      setStatus("success");
      setFormData({
        role: "",
        teacherName: "",
        phone: "",
        email: "",
        schoolName: "",
        state: "",
        medium: "",
        students: "",
        fees: "",
        consent: false,
      });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      setStatus("error");
      alert("There was an error submitting the form.");
    }
  };
  return (
    <section className="relative min-h-screen pt-16 lg:pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-20">
          {/* Left Content */}
          {/* Left Content */}
<div className="text-primary-foreground animate-slide-up">
  <div className="inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-semibold mb-4">
    Trusted by 500+ Schools Across India
  </div>

  <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-6 leading-tight">
    Transform Your School with <span className="text-accent">Future-Ready Learning Solutions</span>
  </h1>

  <p className="text-lg sm:text-xl mb-8 text-primary-foreground/90">
    EduTransform empowers your school community with cutting-edge technology, 
    holistic learning modules, and training programs built for 21st-century success.
  </p>

  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3">
      <CheckCircle2 className="h-6 w-6 mt-1 flex-shrink-0 text-accent" />
      <span className="text-base sm:text-lg">
        <strong>Unmatched Curriculum</strong> & Personalized At-home Learning Support
      </span>
    </li>
    <li className="flex items-start gap-3">
      <CheckCircle2 className="h-6 w-6 mt-1 flex-shrink-0 text-accent" />
      <span className="text-base sm:text-lg">
        <strong>Super Teacher Program</strong> for Empowering Educators
      </span>
    </li>
    <li className="flex items-start gap-3">
      <CheckCircle2 className="h-6 w-6 mt-1 flex-shrink-0 text-accent" />
      <span className="text-base sm:text-lg">
        <strong>AI-enabled Infrastructure</strong> & Digital Classroom Solutions
      </span>
    </li>
    <li className="flex items-start gap-3">
      <CheckCircle2 className="h-6 w-6 mt-1 flex-shrink-0 text-accent" />
      <span className="text-base sm:text-lg">
        <strong>Parent Engagement Tools</strong> for Stronger School-Home Connection
      </span>
    </li>
    <li className="flex items-start gap-3">
      <CheckCircle2 className="h-6 w-6 mt-1 flex-shrink-0 text-accent" />
      <span className="text-base sm:text-lg">
        <strong>Smart Analytics Dashboard</strong> for Data-driven Decision Making
      </span>
    </li>
  </ul>

  

</div>

          {/* Right Form */}
          <Card className="p-6 sm:p-8 shadow-glow bg-card/95 backdrop-blur-sm animate-fade-in">
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">
              Give Your School The EduTransform Advantages
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="role">Role at School *</Label>
                <Select>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="owner">School Owner</SelectItem>
                    <SelectItem value="trustee">Trustee</SelectItem>
                    <SelectItem value="principal">Principal</SelectItem>
                    <SelectItem value="vice-principal">Vice Principal</SelectItem>
                    <SelectItem value="director">Director</SelectItem>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="name">Name *</Label>
                <Input id="name" placeholder="Your name" />
              </div>

              <div>
                <Label htmlFor="phone">Phone number *</Label>
                <Input id="phone" type="tel" placeholder="Your phone number" />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>

              <div>
                <Label htmlFor="school">School Name *</Label>
                <Input id="school" placeholder="Your school name" />
              </div>

              <div>
                <Label htmlFor="state">School in which state? *</Label>
                <Select>
                  <SelectTrigger id="state">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                    <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="medium">Is your School English Medium? *</Label>
                <Select>
                  <SelectTrigger id="medium">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English Medium</SelectItem>
                    <SelectItem value="other">Other Medium</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="students">No. of Students in your School *</Label>
                <Select>
                  <SelectTrigger id="students">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="less-200">Less than 200</SelectItem>
                    <SelectItem value="200-800">200 to 800</SelectItem>
                    <SelectItem value="more-800">More than 800</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="fees">Annual Fees Charged Per Student *</Label>
                <Select>
                  <SelectTrigger id="fees">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="less-8000">INR 8,000 or Less</SelectItem>
                    <SelectItem value="8000-10000">INR 8,000 - 10,000</SelectItem>
                    <SelectItem value="10000-15000">INR 10,000 - 15,000</SelectItem>
                    <SelectItem value="15000-25000">INR 15,000 - 25,000</SelectItem>
                    <SelectItem value="25000-30000">INR 25,000 - 30,000</SelectItem>
                    <SelectItem value="more-30000">INR 30,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* <div className="flex items-start gap-2">
                <Checkbox id="consent" />
                <Label htmlFor="consent" className="text-sm leading-tight cursor-pointer">
                  I agree to receive communications by WhatsApp / SMS / RCS
                </Label>
              </div>

              <p className="text-xs text-muted-foreground">
                By submitting, I agree to EduTransform's Privacy Policy.
              </p> */}

              <Button type="submit" variant="accent" size="lg" className="w-full">
                Submit
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
