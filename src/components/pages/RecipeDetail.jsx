import UserNavbar from "../layouts/UserNavbar";
import UserSidebar from "../layouts/UserSidebar";
import "../../assets/css/RecipeDetail.css";

const RecipeDetail = () => {
  return (
    <div className="wrapper">
      <UserNavbar />
      <UserSidebar />

      <div className="content-wrapper recipe-detail-page">
        <div className="container-fluid py-4">
          <div className="row align-items-center mb-5">
            {/* Left - Image */}
            <div className="col-md-6 text-center">
              <img
                src="../../assets/images/recipeimg2.png"
                alt="Raisin Coconut Cashew Bars"
                className="img-fluid recipe-main-image rounded shadow"
              />
            </div>

            {/* Right - Title and Info */}
            <div className="col-md-6">
              <h2 className="recipe-title">Raisin Coconut Cashew Bars</h2>
              <p className="recipe-subtitle">A chewy and crunchy snack made with tropical flair</p>

              <div className="d-flex flex-wrap justify-content-start mt-4">
                <div className="info-box mr-4">
                  <i className="fas fa-clock mr-2"></i> <strong>Prep:</strong> 15 mins
                </div>
                <div className="info-box mr-4">
                  <i className="fas fa-utensils mr-2"></i> <strong>Cook:</strong> 30 mins
                </div>
                <div className="info-box mr-4">
                  <i className="fas fa-users mr-2"></i> <strong>Servings:</strong> 8
                </div>
              </div>

              <button className="btn btn-success mt-4 px-4">Try This Recipe</button>
            </div>
          </div>

          {/* Bottom - Ingredients and Instructions */}
          <div className="row">
            <div className="col-md-6 instructions">
              <h4 className="mb-3">Ingredients</h4>
              <ul className="ingredients-list list-unstyled">
                <li>1 cup raisins</li>
                <li>1 cup shredded coconut</li>
                <li>1/2 cup chopped cashews</li>
                <li>1/4 cup honey</li>
                <li>2 tbsp butter</li>
                <li>1 tsp vanilla extract</li>
              </ul>
            </div>

            <div className="col-md-6 instructions">
              <h4 className="mb-3">Instructions</h4>
              <ol className="instruction-list">
                <li>Melt butter in a pan and add honey.</li>
                <li>Add raisins, coconut, and cashews. Stir well.</li>
                <li>Pour into a baking dish and flatten.</li>
                <li>Bake at 180°C for 25–30 minutes.</li>
                <li>Cool and cut into bars. Serve and enjoy!</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
