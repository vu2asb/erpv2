import MyDialog from "@/components/ui/myDialog";

const myTestDialog = () => {

  return (
    <div>
      <MyDialog title="Success" description="Your mail has been sent" e_code="in-100" btn_text="Continue"></MyDialog>
      {/* Usage: the three props need to be there but may not have any content. The value of e_code string 
      is uppercased in the code. The other two field are reproduced as such; no processing done on them. 
      Valid values for "Success" prop are Success, Error, Warning, Info and Question.
      Put the Button text in the prop btn_text
      */}
    </div>
  );
};

export default myTestDialog;
