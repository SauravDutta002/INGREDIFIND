// import React, { useState } from 'react';
// import './Recipefetcher.css';

// const RecipeFetcher = () => {
//     const [ingredients, setIngredients] = useState('');
//     const [recipes, setRecipes] = useState([]);
//     const [error, setError] = useState('');

//     const handleInputChange = (e) => {
//         setIngredients(e.target.value);
//     };

//     const handleApiRequest = async () => {
//         const apiKey = 'AIzaSyCneCZNzfaOgXBLTFHlFF6GxifOVqnzzCY'; // Your API key
//         const endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

//         const jsonData = {
//             contents: [{ parts: [{ text: `What recipes can I make with these ingredients: ${ingredients}?` }] }],
//         };

//         try {
//             const response = await fetch(`${endpoint}?key=${apiKey}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(jsonData),
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             console.log('API Response:', data); // Print the API response to the console
//             // Extract the recipes based on the structure of the API response
//             setRecipes(data.candidates); // Adjust according to the API response structure
//             setError('');
//         } catch (error) {
//             console.error('Error fetching recipes:', error);
//             setError('No recipes found. Please try again.');
//             setRecipes([]);
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         handleApiRequest();
//     };

//     return (
//         <div>
//             <h1>Recipe Finder</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={ingredients}
//                     onChange={handleInputChange}
//                     placeholder="Enter ingredients (e.g., tomato, onion)"
//                 />
//                 <button type="submit">Find Recipes</button>
//             </form>
//             {error && <p>{error}</p>}
//             {recipes.length > 0 && (
//                 <div>
//                     <h2>Recipes:</h2>
//                     {recipes.map((recipe, index) => (
//                         <div key={index}>
//                             <h3>{recipe.content.parts[0].text}</h3> {/* Adjust according to the API response structure */}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default RecipeFetcher;





// /////////////////////////////////////////////////////////////////////////////////////////////




import React, { useState } from 'react';
import './RecipeFetcher.css';

const RecipeFetcher = () => {
    const [ingredients, setIngredients] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setIngredients(e.target.value);
    };

    const handleApiRequest = async () => {
        const apiKey = 'AIzaSyCneCZNzfaOgXBLTFHlFF6GxifOVqnzzCY'; // Your API key
        const endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

        const jsonData = {
            contents: [{ parts: [{ text: `What recipes can I make with these ingredients: ${ingredients}?` }] }],
        };

        try {
            const response = await fetch(`${endpoint}?key=${apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('API Response:', data);
            setRecipes(data.candidates);
            setError('');
        } catch (error) {
            console.error('Error fetching recipes:', error);
            setError('No recipes found. Please try again.');
            setRecipes([]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleApiRequest();
    };

    return (
        <div className="recipe-fetcher">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={ingredients}
                    onChange={handleInputChange}
                    placeholder="Enter ingredients (e.g., tomato, onion)"
                    className="ingredient-input"
                />
                <button type="submit" className="submit-button">Find Recipes</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            {recipes.length > 0 && (
                <div className="recipe-list">
                    <h2>Recipes:</h2>
                    {recipes.map((recipe, index) => (
                        <div key={index} className="recipe-item">
                            <h3 className="recipe-title">{recipe.content.parts[0].text}</h3>
                            <p className="recipe-description">This recipe can be made using your ingredients!</p>
                            <div className="recipe-ingredients">Ingredients: {ingredients}</div>
                            <div className="recipe-separator"></div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RecipeFetcher;
