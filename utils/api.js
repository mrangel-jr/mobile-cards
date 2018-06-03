import { AsyncStorage } from 'react-native';
import {getBasicStructure} from '../utils/helpers';

export const FLASHCARD_STORAGE_KEY = 'FlashCards:decks';

export function addCardToDeck (title, card ) {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
      .then((results) => {
        const data = JSON.parse(results);
        data[title].key.questions.push(card);
        AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
      });
}

export function saveDeckTitle (title) {
    return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
      [title] : getBasicStructure(title),
    }));
}

export function getDecks () {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then((items) => {
        return JSON.parse(items);
    });
}

export function getDeck (title) {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
      .then((results) => {
        const data = JSON.parse(results);
        return data[title].key;
      });
}

