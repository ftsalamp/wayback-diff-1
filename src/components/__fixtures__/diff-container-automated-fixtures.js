import DiffContainer from '../diff-container.jsx';
let conf = require('../../conf.json');

export default
{
  component: DiffContainer,
  name: 'Only-left',
  props:
      {
        'url': 'iskme.org',
        'timestampA': '20030328195612',
        'loader': null,
        'fetchCDXCallback': null,
        'conf': {
          'webMonitoringProcessingURL': conf.webMonitoringProcessingURL,
          'limit': conf.limit,
          'snapshotsPrefix': conf.snapshotsPrefix,
          'urlPrefix': conf.urlPrefix,
          'diffgraphPrefix': conf.diffgraphPrefix,
          'cdxServer': conf.cdxServer,
          'iframeLoader': conf.iframeLoader,
          'waybackDiscoverDiff': conf.waybackDiscoverDiff,
          'maxSunburstLevelLength': conf.maxSunburstLevelLength
        },
        'fetchSnapshotCallback': null
      }
};
