import _ from 'underscore';

/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} newDeck Es un arreglo de string
 * @returns String rotorna la carta del deck
 */
export const pedirCarta = (newDeck) => {

    if ( newDeck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = newDeck.pop();
    return carta;
}