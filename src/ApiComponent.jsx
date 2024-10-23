// import React, { useState } from 'react';
// import './ApiComponent.css'; // Importing CSS styles

// const ApiComponent = () => {
//     const [ingredient, setIngredient] = useState('');
//     const [ingredients, setIngredients] = useState([]);
//     const [recipes, setRecipes] = useState([]);
//     const [error, setError] = useState(null);
//     const apiKey = 'AIzaSyCneCZNzfaOgXBLTFHlFF6GxifOVqnzzCY'; // Your API key

//     const handleAddIngredient = () => {
//         if (ingredient) {
//             setIngredients([...ingredients, ingredient]);
//             setIngredient(''); // Clear input after adding
//         }
//     };

//     const handleApiRequest = async (e) => {
//         e.preventDefault();
//         console.log('Fetching recipes for ingredients:', ingredients); // Debugging line

//         const url = `https://your-recipe-api-url.com/getRecipes`; // Replace with your actual recipe API URL
        
//         const jsonData = {
//             ingredients: ingredients, // Pass the list of ingredients
//         };

//         try {
//             const res = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(jsonData),
//             });

//             if (!res.ok) {
//                 throw new Error('Network response was not ok: ' + res.statusText);
//             }

//             const data = await res.json();
//             console.log('API response:', data); // Debugging line
//             setRecipes(data.recipes || []); // Update state with recipes
//         } catch (error) {
//             console.error('Error fetching recipes:', error);
//             setError('Error fetching recipes. Please try again.'); // Set error message
//             setRecipes([]); // Clear recipes on error
//         }
//     };

//     return (
//         <div className="api-container">
//             <h1 className="api-title">Recipe Finder</h1>
//             <div className="ingredient-input">
//                 <input
//                     type="text"
//                     className="api-input"
//                     value={ingredient}
//                     onChange={(e) => setIngredient(e.target.value)}
//                     placeholder="Add an ingredient"
//                 />
//                 <button onClick={handleAddIngredient} className="api-button">Add Ingredient</button>
//             </div>
//             <form className="api-form" onSubmit={handleApiRequest}>
//                 <button type="submit" className="api-button">Get Recipes</button>
//             </form>
//             {error && <p className="error-message">{error}</p>} {/* Display error message */}
//             <div className="api-response">
//                 <h2 className="response-title">Recipes:</h2>
//                 {recipes.length > 0 ? (
//                     <ul className="recipe-list">
//                         {recipes.map((recipe, index) => (
//                             <li key={index} className="recipe-item">
//                                 <h3>{recipe.title}</h3>
//                                 <p>{recipe.instructions}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p>No recipes found. Please add ingredients and try again.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ApiComponent;


import React, { useState } from 'react';
import './ApiComponent.css'; // Importing CSS styles



const ApiComponent = () => {
    const [ingredient, setIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const apiKey = 'AIzaSyCneCZNzfaOgXBLTFHlFF6GxifOVqnzzCY'; // Your API key

    const handleAddIngredient = () => {
        if (ingredient) {
            setIngredients([...ingredients, ingredient]);
            setIngredient(''); // Clear input after adding
        }
    };

    const handleApiRequest = async (e) => {
        e.preventDefault();
        
        // Hardcoded for testing
        const jsonData = {
            ingredients: ingredients.length > 0 ? ingredients : ['tomato', 'onion'], // Use dynamic ingredients or hardcoded
        };

        console.log('Fetching recipes for ingredients:', jsonData.ingredients); // Debugging line

        const url = `https://your-recipe-api-url.com/getRecipes`; // Replace with your actual recipe API URL
        
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
            });

            if (!res.ok) {
                throw new Error('Network response was not ok: ' + res.statusText);
            }

            const data = await res.json();
            console.log('API response:', data); // Debugging line
            setRecipes(data.recipes || []); // Update state with recipes
        } catch (error) {
            console.error('Error fetching recipes:', error);
            setError('Error fetching recipes. Please try again.'); // Set error message
            setRecipes([]); // Clear recipes on error
        }
    };

    return (
        <div className="api-container">
            <h1 className="api-title">Recipe Finder</h1>
            <div className="ingredient-input">
                <input
                    type="text"
                    className="api-input"
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                    placeholder="Add an ingredient"
                />
                <button onClick={handleAddIngredient} className="api-button">Add Ingredient</button>
            </div>
            <form className="api-form" onSubmit={handleApiRequest}>
                <button type="submit" className="api-button">Get Recipes</button>
            </form>
            {error && <p className="error-message">{error}</p>} {/* Display error message */}
            <div className="api-response">
                <h2 className="response-title">Recipes:</h2>
                {recipes.length > 0 ? (
                    <ul className="recipe-list">
                        {recipes.map((recipe, index) => (
                            <li key={index} className="recipe-item">
                                <h3>{recipe.title}</h3>
                                <p>{recipe.instructions}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No recipes found. Please add ingredients and try again.</p>
                )}
            </div>
        </div>
    );
};

export default ApiComponent;
