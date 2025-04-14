import { useEffect, useState } from "react";
import "./UserDashboard.css";

const UserDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // Recipe data array
  const recipes = [
    {
      id: 1,
      image: "../../assets/images/recipeimg1.png",
      title: <b>Apple Quinoa Salad with Sweet Tahini Dressing</b>,
      time: "25 mins",
      difficulty: "Medium",
    },
    {
      id: 2,
      image: "../../assets/images/recipeimg2.png",
      title: <b>Raisin Coconut Cashew Bars</b>,
      time: "10 mins",
      difficulty: "Easy",
    },
    {
      id: 3,
      image: "../../assets/images/recipeimg3.png",
      title: <b>Harvest Pear & Ginger Muffins</b>,
      time: "40 mins",
      difficulty: "Hard",
    },
    {
      id: 4,
      image: "../../assets/images/recipeimg4.png",
      title: <b>Vegan Gluten-Free Carrot Muffins</b>,
      time: "15 mins",
      difficulty: "Easy",
    },
  ];

  return (
    <div className="wrapper">
      <div className="content-wrapper1">
        <div className="container-fluid">
          <h2 className="mb-4 card dashboardname">
            Welcome {user ? user.name : "User"}, <br />
            Lets Start With Recommendations.
          </h2>

          {/* Hero Banner using AdminLTE Card */}
          <div className="card card-primary hero-banner">
            <div className="card-body p-0">
              <div className="hero-text">
                <h3>Delicious Recipes Await</h3>
                <p>Explore meals customized just for you.</p>
              </div>
            </div>
          </div>

          {/* Recommended Recipes */}
          <h4 className="section-title mt-5 mb-3">Recommended for You</h4>
          <div className="row">
            {recipes.map((recipe, index) => (
              <div key={index} className="col-md-3">
                <div className="card recipe-card">
                  <img
                    src={recipe.image}
                    className="card-img-top"
                    alt={recipe.title}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{recipe.title}</h5>
                    <p className="card-text">
                      {recipe.time} • {recipe.difficulty}
                    </p>
                  </div>
                  <a href="/recipes/1" className="btn btn-primary trybtn">Try</a>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
