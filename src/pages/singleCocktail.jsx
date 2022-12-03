import { useParams, Link } from "react-router-dom";
import "../style/singleCocktail.css";
import { useFetch } from "../hooks/useFetch";
import Loading from "../pages/loading";
const SingleCocktail = () => {
    const { cocktailId } = useParams();
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;
    const { data, loading } = useFetch(url);
    if (loading) {
        return <Loading />
    }
    else {
        const { drinks } = data;
        if (drinks) {
            const drink = drinks[0];
            const { strDrink,
                strAlcoholic,
                strCategory,
                strInstructions,
                strDrinkThumb,
                strGlass,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5 } = drink
            const cocktail = {
                name: strDrink,
                info: strAlcoholic,
                category: strCategory,
                instructions: strInstructions,
                image: strDrinkThumb,
                glass: strGlass,
            }
            const ingredients = [
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5
            ]
            const newIngredients = ingredients.filter((ingredient) => {
                if (ingredient) return ingredient;
            })
            console.log(newIngredients);
            return <div className="singleCocktailContainer">
                <div className="singleCocktail">
                    <div className="cocktailName">
                        <h2>{cocktail.name}</h2>
                    </div>
                    <div className="cocktailInfoContainer">
                        <div className="cocktailImageContaier">
                            <img src={cocktail.image} alt="cocktail image" />
                        </div>
                        <div className="cocktailInfo">
                            <div className="cocktailNameSecond info" >
                                <span className="heading">Name:</span>
                                <span>{cocktail.name}</span>
                            </div>
                            <div className="cotailCategory info">
                                <span className="heading">Category:</span>
                                <span>{cocktail.category}</span>
                            </div>
                            <div className="cotailInfo info">
                                <span className="heading">info:</span>
                                <span>{cocktail.info}</span>
                            </div>
                            <div className="cocktailGlass info">
                                <span className="heading">Glass:</span>
                                <span>{cocktail.glass}</span>
                            </div>
                            <div className="instruction info">
                                <span className="heading">instruction:</span>
                                <span>{cocktail.instructions}</span>
                            </div>
                            <div className="ingredients info">
                                <span className="heading">ingredients:</span>
                                <div className="ingredients-span">{newIngredients.map((ingredient) => {
                                    return <span className="ingredinet" key={Math.random()}>{ingredient}</span>
                                })}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/" className="backHomeLink">
                    <button className="btn backHome">back Home</button>
                </Link>

            </div>
        }
        else {
            return <div className="noCocktails">
                <h2>no cocktail found</h2>
            </div>
        }

    }

}
export default SingleCocktail;