import { Link } from "react-router-dom";
import { useGlobal } from "../context/context";
import "../style/home.css";
const Home = () => {
    let { searchTerm, setSearchTerm, data, loading } = useGlobal();
    const { drinks } = data;
    console.log(drinks, loading);
    if (drinks) {
        return (
            <main className="homeContainer" >
                <div className="formContainer">
                    <form className="form">
                        <label htmlFor="cocktail">cocktail:</label>
                        <input type="text" name="cocktail" id="cocktail" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
                    </form>
                </div>
                <div className="cocktailTitle">
                    <h2>cocktails</h2>
                </div>
                <div className="cocktailList">
                    {drinks.map((drink) => {
                        const { idDrink, strAlcoholic, strDrinkThumb, strDrink, strCategory, strGlass } = drink;
                        return <div className="cocktail" key={idDrink}>
                            <div className="imageContainer">
                                <img src={strDrinkThumb} alt="cocktail image" />
                            </div>
                            <div className="cocktailInfo">
                                <h1>{strDrink}</h1>
                                <h4>{strGlass}</h4>
                                <p>{strAlcoholic}</p>
                                <Link to={`/${idDrink}`}>
                                    <button className="btn">Details</button>
                                </Link>
                            </div>
                        </div>
                    })}
                </div>

            </main>
        )
    } else {
        return <div className="noCocktails">
            <div className="formContainer">
                <form className="form">
                    <label htmlFor="cocktail">cocktail:</label>
                    <input type="text" name="cocktail" id="cocktail" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
                </form>
            </div>
            <h2>no cocktail matched</h2>
        </div>
    }

}
export default Home;