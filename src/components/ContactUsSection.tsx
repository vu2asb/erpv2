import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ContactUsSection = () => {
  return (
    <div className="flex flex-row w-full space-x-2 min-h-fit">
      <div className="border p-10 border-white w-[80%] bg-gradient-to-r from-violet-800 to-fuchsia-800">
        <div className="mt-2 w-40">
          <hr className="ml-4 border-primary border-2"></hr>
        </div>
        <h1 className="text-3xl w-10 pl-5 mt-5 mb-5">CONTACT</h1>
        <div className="ml-5 text-[15px]">
          <h3>Time: 9 AM to 6 PM</h3>
          <h3>Indian Standard Time (UTC+5:30) Monday through Saturday</h3>


        </div>
      </div>

      <div className="border border-white w-[80%]">
      <h3 className="mt-4">What's your preferance</h3> 
      <RadioGroup defaultValue="option-one" className="mt-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Video Conferrance</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">WhatsApp voice call</Label>
            </div>
          </RadioGroup>
      </div>
    </div>
  );
};

export default ContactUsSection;
