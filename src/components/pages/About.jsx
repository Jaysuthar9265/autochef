import UserNavbar from "../layouts/UserNavbar";
import UserSidebar from "../layouts/UserSidebar";
import "../../assets/css/About.css";

const About = () => {
  return (
    <div className="wrapper">
      <UserNavbar />
      <UserSidebar />

      <div className="content-wrapper about-page">
        <div className="container py-5">
          <h1 className="mb-4 text-center about-title">About AutoChef</h1>

          <div className="row mb-5">
            <div className="col-md-6">
              <img
                src="../../assets/images/SmartKitchen.png"
                alt="Smart Kitchen"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <p className="about-text">
                <strong>AutoChef</strong> is your ultimate smart cooking assistant. We help
                streamline meal planning, manage ingredients, suggest personalized recipes,
                and integrate with smart kitchen appliances for a seamless cooking experience.
              </p>
              <p className="about-text">
                Whether you're a beginner or a seasoned chef, AutoChef simplifies
                your culinary journey with intelligent features tailored to your needs.
              </p>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-4">
              <div className="feature-box shadow-sm p-4 rounded text-center">
                <i className="fas fa-search fa-2x mb-3 text-primary"></i>
                <h5>Smart Recipe Finder</h5>
                <p>Find the best recipes based on your preferences and ingredients at home.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box shadow-sm p-4 rounded text-center">
                <i className="fas fa-list-alt fa-2x mb-3 text-success"></i>
                <h5>Auto Shopping Lists</h5>
                <p>Generate instant grocery lists from selected recipes for easy shopping.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box shadow-sm p-4 rounded text-center">
                <i className="fas fa-robot fa-2x mb-3 text-warning"></i>
                <h5>Smart Appliance Sync</h5>
                <p>Control your smart oven, stove, and more directly from AutoChef.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="mb-3">Our Mission</h3>
            <p className="lead">
              Empower every home cook with smart tools to make cooking enjoyable,
              efficient, and stress-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
