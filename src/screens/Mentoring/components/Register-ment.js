import CardRegisterMent from "../../../components/Cards/Card-resgister-ment";
import "../../../sass/components/cards/registerMent.scss";

function RegisterMent() {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores excepturi repellendus itaque minus.";
    return (
      <div className="app-links">
        <div className="ment__features">
        
          <CardRegisterMent
            backgroundColor="bg-grey"
            title="Become a mentor"
            text={text}
            link="/users/mentor"
            btnText="Register"
            type="submit"

          />
        </div>  
        <div className="ment__features">    
          <CardRegisterMent
            backgroundColor="bg-grey"
            title="Become a mentee"
            text={text}
            link="/users/mentee"
            btnText="Register"
          />
        </div> 
      </div>
    );
  }
  
  export default RegisterMent;