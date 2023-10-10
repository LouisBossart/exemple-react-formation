import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeForm.module.css";
import Button from "../../uis/Button/Button";
import { emptyMeme } from "orsys-tjs-meme";

const MemeForm = (props) => {
  const [state, setstate] = useState(emptyMeme);
  /**
   * gestion generique de changement basé sur les titre d'input
   * @param {React.ChangeEvent<HTMLInputElement>} evt evenement a analyser
   * @returns undefined
   */
  function onValueChange(evt) {
    let o = {};
    //attention au correspondances des titile et du nom
    //de champs dans l'etat pour cette methode de gestion generique du changement
    o[evt.target.titre] = evt.target.value;
    setstate({ ...state, ...o });
  }

  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form>
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input
          name="titre"
          id="titre"
          value={state.titre}
          onChange={(evt) => {
            //console.log(evt)
            setstate({ ...state, titre: evt.target.value });
          }}
        />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="image" id="image">
          <option value="-1">Pas d'image</option>
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input
          name="text"
          id="text"
          type="text"
          value={state.text}
          onChange={onValueChange}
        />
        <br />
        <label htmlFor="x">
          <h2 className={styles.inline}>x :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="x"
          id="x"
          type="number"
          value={state.x}
          onChange={(evt) => {
            //console.log(evt)
            setstate({ ...state, x: Number(evt.target.value) });
          }}
        />
        <label htmlFor="y">
          <h2 className={styles.inline}>y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="y"
          id="y"
          type="number"
          value={state.y}
          onChange={(evt) => {
            //console.log(evt)
            setstate({ ...state, y: Number(evt.target.value) });
          }}
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 className={styles.inline}>color :</h2>
        </label>
        <input
          name="color"
          id="color"
          type="color"
          value={state.color}
          onChange={(evt) => {
            //console.log(evt)
            setstate({ ...state, color: evt.target.value });
          }}
        />
        <br />
        <label htmlFor="fontSize">
          <h2 className={styles.inline}>font-size :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
          value={state.fontSize}
          onChange={(evt) => {
            //console.log(evt)
            setstate({ ...state, fontSize: Number(evt.target.value) });
          }}
        />
        px
        <br />
        <label htmlFor="fontWeight">
          <h2 className={styles.inline}>font-weight :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900"
          value={state.fontWeight}
          onChange={(evt) => {
            //console.log(evt)
            setstate({ ...state, fontWeight: evt.target.value });
          }}
        />
        <br />
        <input
          name="underline"
          id="underline"
          type="checkbox"
          checked={state.underline}
          onChange={(evt) => {
            //console.log(evt)
            setstate({ ...state, underline: evt.target.checked });
          }}
        />
        &nbsp;
        <label htmlFor="underline">
          <h2 className={styles.inline}>underline</h2>
        </label>
        &nbsp;<h2 className={styles.inline}>/</h2>&nbsp;
        <label htmlFor="italic">
          <h2 className={styles.inline}>italic</h2>
        </label>
        &nbsp;
        <input
          name="italic"
          id="italic"
          type="checkbox"
          checked={state.italic}
          onChange={(evt) => {
            //console.log(evt)
            setstate({ ...state, italic: evt.target.checked });
          }}
        />
        <hr />
        <br />
        <label htmlFor="frameSizeX">
          <h2 className={styles.inline}>frame size X :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeX"
          id="frameSizeX"
          type="number"
          min="0"
          value={state.frameSizeX}
          onChange={(evt) => {
            //console.log(evt)
            setstate({ ...state, frameSizeX: Number(evt.target.value) });
          }}
        />
        px
        <label htmlFor="frameSizeY">
          <h2 className={styles.inline}>frame size y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeY"
          id="frameSizeY"
          type="number"
          min="0"
          value={state.frameSizeY}
          onChange={(evt) => {
            //console.log(evt)
            setstate({ ...state, frameSizeY: Number(evt.target.value) });
          }}
        />
        px
        <br />
        <Button type={"submit"}>OK</Button>
      </form>
    </div>
  );
};

export default MemeForm;
