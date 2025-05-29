const { LoadCommands, AoiClient } = require("aoi.js")
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@aoijs/aoi.music")

//ayarlar
const client = new AoiClient({
    token: token,
    prefix: prefix,
    intents: intents,
    events: events,
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    },
});

// Aoi.js VOİCE
const voice = new AoiVoice(client, {
    requestOptions: {
      offsetTimeout: 0,
      soundcloudLikeTrackLimit: 200,
    },
    searchOptions: {
     youtubeClient: "WEB"
    }
  });

// optional (cacher / filter)
voice.addPlugin(PluginName.Cacher, new Cacher("memory" /* or "disk" */));
voice.addPlugin(PluginName.Filter, new Filter({
    filterFromStart: false
})),
voice.bindExecutor(client.functionManager.interpreter);
voice.addEvent(PlayerEvents.TrackStart);
voice.addEvent(PlayerEvents.TrackPause);
voice.addEvent(PlayerEvents.TrackEnd);
voice.addEvent(PlayerEvents.TrackResume);
voice.addEvent(PlayerEvents.AudioError);
voice.addEvent(PlayerEvents.AoiVoice);
