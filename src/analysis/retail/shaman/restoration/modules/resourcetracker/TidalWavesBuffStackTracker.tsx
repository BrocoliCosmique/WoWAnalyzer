import BuffStackTracker from 'parser/shared/modules/BuffStackTracker';
import { Options } from 'parser/core/Analyzer';
import SPELLS from 'common/SPELLS/shaman';

export default class TidalWavesBuffStackTracker extends BuffStackTracker {
  static trackedBuff = SPELLS.TIDAL_WAVES_BUFF;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(options: Options) {
    super(options);
  }
}
