import { change, date } from 'common/changelog';
import SPELLS from 'common/SPELLS';
import { TALENTS_MONK } from 'common/TALENTS';
//import SPELLS from 'common/SPELLS';
//import { TALENTS_MONK } from 'common/TALENTS';
import { Vohrr } from 'CONTRIBUTORS';
import SpellLink from 'interface/SpellLink';
//import { SpellLink } from 'interface';



export default [
  change(date(2024, 6, 14), <>Added <SpellLink spell={TALENTS_MONK.CRANE_STYLE_TALENT}/> analysis.</>, Vohrr),
  change(date(2024, 6, 14), <>Update <SpellLink spell={SPELLS.GUSTS_OF_MISTS}/> source breakdown to include <SpellLink spell={TALENTS_MONK.JADEFIRE_STOMP_TALENT}/> and <SpellLink spell={TALENTS_MONK.CRANE_STYLE_TALENT}/>. </>, Vohrr),
  change(date(2024, 6, 14), <>Add <SpellLink spell={TALENTS_MONK.LOTUS_INFUSION_TALENT}/> module.</>, Vohrr),
  change(date(2024, 6, 14), <>Enable Mistweaver for The War Within and Spells and Abilities cleanup.</>, Vohrr),
  change(date(2024, 6, 10), <>The War Within initial commit - removing modules for deleted talents.</>, Vohrr),
];
