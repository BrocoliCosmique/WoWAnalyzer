import BuffStackGraph from 'parser/shared/modules/BuffStackGraph';
import TidalWavesBuffStackTracker from './TidalWavesBuffStackTracker';
import SpellLink from 'interface/SpellLink';
import SPELLS from 'common/SPELLS/shaman';
import TALENTS_SHAMAN from 'common/TALENTS/shaman';
import { RoundedPanel } from 'interface/guide/components/GuideDivs';
import { explanationAndDataSubsection } from 'interface/guide/components/ExplanationRow';

/** Common 'rule line' point for the explanation/data in Core Spells section */
export const GUIDE_CORE_EXPLANATION_PERCENT = 40;

export default class TidalWavesGraph extends BuffStackGraph {
  static dependencies = {
    ...BuffStackGraph.dependencies,
    tidalWavesBuffStackTracker: TidalWavesBuffStackTracker,
  };

  tidalWavesBuffStackTracker!: TidalWavesBuffStackTracker;

  tracker() {
    return this.tidalWavesBuffStackTracker;
  }

  // plot included in Guide

  /** Guide subsection describing the proper usage of Efflorescence */
  get guideSubsection(): JSX.Element {
    const explanation = (
      <p>
        <strong>
          <SpellLink spell={TALENTS_SHAMAN.TIDAL_WAVES_TALENT} />
        </strong>{' '}
        management is central to your gameplay. <SpellLink spell={TALENTS_SHAMAN.RIPTIDE_TALENT} />{' '}
        is part of the core rotation and buffs your next 2 direct heals. You should avoid casting{' '}
        <SpellLink spell={TALENTS_SHAMAN.HEALING_WAVE_TALENT} />,{' '}
        <SpellLink spell={SPELLS.HEALING_SURGE} /> and{' '}
        <SpellLink spell={TALENTS_SHAMAN.CHAIN_HEAL_TALENT} /> unbuffed, and try not to overcap{' '}
        <SpellLink spell={SPELLS.TIDAL_WAVES_BUFF} />.
      </p>
    );

    const data = (
      <div>
        <RoundedPanel>
          <strong>
            <SpellLink spell={SPELLS.TIDAL_WAVES_BUFF} /> stacks
          </strong>
          {this.plot}
        </RoundedPanel>
      </div>
    );

    return explanationAndDataSubsection(explanation, data, GUIDE_CORE_EXPLANATION_PERCENT);
  }
}
