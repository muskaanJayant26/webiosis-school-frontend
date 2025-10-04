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
import heroImage from "@/assets/hero-bg.jpg";
import { CheckCircle2 } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-16 lg:pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-20">
          {/* Left Content */}
          <div className="text-primary-foreground animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your School with Future-Ready Learning Solutions
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-primary-foreground/90">
              EduTransform School System builds confidence in your students through
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg">
                  <strong>Unmatched Curriculum & At-home</strong> Support For Your Students
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg">
                  <strong>Super Teacher Program For</strong> Your Teachers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg">
                  <strong>Cutting-edge Infrastructure</strong> Upgrades For Your School
                </span>
              </li>
            </ul>
          </div>

          {/* Right Form */}
          <Card className="p-6 sm:p-8 shadow-glow bg-card/95 backdrop-blur-sm animate-fade-in">
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">
              Give Your School The EduTransform Advantages
            </h3>
            <form className="space-y-4">
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

              <div className="flex items-start gap-2">
                <Checkbox id="consent" />
                <Label htmlFor="consent" className="text-sm leading-tight cursor-pointer">
                  I agree to receive communications by WhatsApp / SMS / RCS
                </Label>
              </div>

              <p className="text-xs text-muted-foreground">
                By submitting, I agree to EduTransform's Privacy Policy.
              </p>

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
