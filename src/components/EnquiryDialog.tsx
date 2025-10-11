import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface EnquiryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formType: "school" | "parent" | "teacher" | "general";
}

export const EnquiryDialog = ({ open, onOpenChange, formType }: EnquiryDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    phone: "",
    email: "",
    school: "",
    state: "",
    medium: "",
    students: "",
    fees: "",
    childAge: "",
    grade: "",
    teachingExperience: "",
    subject: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted!",
      description: "We'll get back to you soon.",
    });
    onOpenChange(false);
    setFormData({
      role: "",
      name: "",
      phone: "",
      email: "",
      school: "",
      state: "",
      medium: "",
      students: "",
      fees: "",
      childAge: "",
      grade: "",
      teachingExperience: "",
      subject: "",
    });
  };

  const getFormTitle = () => {
    switch (formType) {
      case "school":
        return "School Enquiry Form";
      case "parent":
        return "Parent Enquiry Form";
      case "teacher":
        return "Teacher Enquiry Form";
      default:
        return "Enquiry Form";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {getFormTitle()}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* School Form Fields */}
          {formType === "school" && (
            <>
              <div>
                <Label htmlFor="role">Role at School *</Label>
                <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
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
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="school">School Name *</Label>
                <Input
                  id="school"
                  placeholder="Your school name"
                  value={formData.school}
                  onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="state">School in which state? *</Label>
                <Select value={formData.state} onValueChange={(value) => setFormData({ ...formData, state: value })}>
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
                <Select value={formData.medium} onValueChange={(value) => setFormData({ ...formData, medium: value })}>
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
                <Select value={formData.students} onValueChange={(value) => setFormData({ ...formData, students: value })}>
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
                <Select value={formData.fees} onValueChange={(value) => setFormData({ ...formData, fees: value })}>
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
            </>
          )}

          {/* Parent Form Fields */}
          {formType === "parent" && (
            <>
              <div>
                <Label htmlFor="name">Parent Name *</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="childAge">Child's Age/Grade *</Label>
                <Input
                  id="childAge"
                  placeholder="e.g., 8 years / Grade 3"
                  value={formData.childAge}
                  onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="school">Child's School Name *</Label>
                <Input
                  id="school"
                  placeholder="School name"
                  value={formData.school}
                  onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="state">State *</Label>
                <Select value={formData.state} onValueChange={(value) => setFormData({ ...formData, state: value })}>
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
            </>
          )}

          {/* Teacher Form Fields */}
          {formType === "teacher" && (
            <>
              <div>
                <Label htmlFor="name">Teacher Name *</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="school">School Name *</Label>
                <Input
                  id="school"
                  placeholder="Your school name"
                  value={formData.school}
                  onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject You Teach *</Label>
                <Input
                  id="subject"
                  placeholder="e.g., Mathematics, Science"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="teachingExperience">Teaching Experience *</Label>
                <Select value={formData.teachingExperience} onValueChange={(value) => setFormData({ ...formData, teachingExperience: value })}>
                  <SelectTrigger id="teachingExperience">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-2">0-2 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="6-10">6-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="state">State *</Label>
                <Select value={formData.state} onValueChange={(value) => setFormData({ ...formData, state: value })}>
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
            </>
          )}

          {/* General Form Fields */}
          {formType === "general" && (
            <>
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </>
          )}

          <Button type="submit" variant="accent" size="lg" className="w-full">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
