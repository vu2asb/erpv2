"use client";

import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";

const SwalPoC = () => {
  return (
    <div>
      <Button
        onClick={() => {
            Swal.fire({
                title: "Oops...",
                imageUrl: "data-center.png",
                imageWidth: 320,
                imageHeight: 200,
                imageAlt: "Custom image",
                width: '380px',
                html: `
                <h3 style="font-size: 0.8em; margin-bottom: 8px;">We're currently experiencing a system outage.</h3>
                <h4 style="font-size: 0.75em; margin-bottom: 6px;">Our team is working diligently to restore service.</h4>
                <h5 style="font-size: 0.65em; margin-bottom: 8px;">Thank you for your patience.</h5>
                <h6 style="font-size: 0.5em; margin-bottom: 5px; color: green;">[MA-100]</h6>
                  `,
                footer:
                  '<a style="color: blue; font-size: 0.65em;" href="#">Why do I have this issue?</a>',
                confirmButtonText: "Continue",
              });
        }}
      >
        Click me
      </Button>
    </div>
  );
};

export default SwalPoC;
