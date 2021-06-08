import "../../sass/pages/_welcome-message.scss";

export default function WelcomeMessage() {
  return (
    <div className="welcome-message">
      <h1>Welcome to the <span className="bold"> BeeHive</span>!</h1>
      <p>Please check your email and click on the link to confirm your account.</p>
    </div>
  );
}
