import { change, date } from 'common/changelog';
import { SHAMAN_TWW1_ID } from 'common/ITEMS/dragonflight';
import ItemSetLink from 'interface/ItemSetLink';
import {
  Seriousnes,
  Ypp,
  Texleretour
} from 'CONTRIBUTORS';

// prettier-ignore
export default [
  change(date(2024, 8, 15), <>Implement <ItemSetLink id={SHAMAN_TWW1_ID}>Nerub-ar tier set</ItemSetLink> for Resto</>, Ypp),
  change(date(2024, 8, 14), <>Deletion of Dragonflight tier sets from the code</>, Ypp),
  change(date(2024, 8, 13), <>New statistic: Mana saved from Nature's Swiftness</>, Texleretour),
  change(date(2024, 8, 9), <>Initial support for Restoration Shaman in The War Within</>, Ypp),
  change(date(2024, 7, 27), <>Partial update for 11.0.0</>, Seriousnes),
];
