import React, { useState } from "react";
import "./Pokemon.css";

function Pokemon() {
  const [pokemonData, setPokemonData] = useState({
    name: "",
    id: "",
    sprite: "",
    type1: "",
    type2: "",
  });

  async function fetchData() {
    try {
      const pokemonName = document
        .getElementById("PokemonName")
        .value.toLowerCase();
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );

      if (!response.ok) {
        throw new Error("Pokemon não foi achado");
      }

      const data = await response.json();

      setPokemonData({
        name: data.name.toUpperCase(),
        id: `Nº ${data.id}`,
        sprite: data.sprites.front_default,
        type1: data.types[0].type.name.toLowerCase(),
        type2: data.types[1] ? data.types[1].type.name.toLowerCase() : "",
      });

      let PokemonImg = document.getElementById("PokemonImg");
      PokemonImg.style.display = "flex";
      PokemonImg.style.width = "200px";
    } catch (error) {
      console.error(error);
    }
  }

  function getColorByType(type) {
    switch (type) {
      case "fire":
        return "#ED410B";
      case "grass":
        return "#6EBC31";
      case "water":
        return "#318FEF";
      case "electric":
        return "#F2A70A";
      case "ground":
        return "#E4CF5E";
      case "bug":
        return "#A6B71F";
      case "normal":
        return "#C8C2BB";
      case "flying":
        return "#8397E8";
      case "fighting":
        return "#662D1B";
      case "poison":
        return "#884289";
      case "rock":
        return "#A48B40";
      case "psychic":
        return "#EA447E";
      case "ice":
        return "#6CD2F5";
      case "ghost":
        return "#5C5CB0";
      case "steel":
        return "#B6B4C2";
      case "dragon":
        return "#705BD9";
      case "dark":
        return "#4D382A";
      case "fairy":
        return "#F6AFF3";
      default:
        return "";
    }
  }

  return (
    <div className="upperbody">
      <div className="uperuperbody">
        <div className="pokemoninput">
          <input type="text" id="PokemonName" placeholder="Insira um Pokemon" />
          <button onClick={fetchData}>Fetch</button>
        </div>
        <p>Pokedex feita por mim</p>
      </div>

      <div className="PokemonName">
        <div id="PokemonUsername">{pokemonData.name}</div>
      </div>
      <div id="pokemonumber">{pokemonData.id}</div>

      <div className="PokemonImg">
        <img
          src={pokemonData.sprite}
          alt="Pokemon Image"
          id="PokemonImg"
          style={{ display: "none" }}
        />
      </div>

      <div className="styletypes">
        <div
          id="tipo1"
          className="types"
          style={{ color: getColorByType(pokemonData.type1) }}
        >
          {pokemonData.type1.toUpperCase()}
        </div>
        {pokemonData.type2 && (
          <div
            id="tipo2"
            className="types"
            style={{ color: getColorByType(pokemonData.type2) }}
          >
            {pokemonData.type2.toUpperCase()}
          </div>
        )}
      </div>
    </div>
  );
}

export default Pokemon;
