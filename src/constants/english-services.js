import SeekPointType from './seek-point-type';

const englishServices = [
    { youtubeVideoID: "WAouZ0anz2I", message: "Death and Taxes -- Matt. 17:1-27", pastor: "Pastor Larry Lee", date: "2023-07-23T16:30:00Z", duration: "00:00:00", seekPoints: [] },
    { youtubeVideoID: "xt4UybrmZ3w", message: "The Yeast of These -- Matt. 16:1-28", pastor: "Pastor Chris Sung", date: "2023-07-16T16:30:00Z", duration: "01:23:35", seekPoints: [] },
    { youtubeVideoID: "nPbzum4abh8", message: "Did You Think That? — Matt. 15:21-39", pastor: "Pastor Larry Lee", date: "2023-07-09T16:30:00Z", duration: "01:18:40", seekPoints: [] },
    { youtubeVideoID: "IdcfWT-jyVI", message: "Did You Smell That? — Matt. 15:1-20", pastor: "Pastor Larry Lee", date: "2023-07-02T16:30:00Z", duration: "01:16:45", seekPoints: [] },

    { youtubeVideoID: "EWQ__H_85bE", message: "Rebuilding Opposed (Ezra 4)", pastor: "Rev. Larry Lee", date: "2020-10-04T16:30:00Z", duration: "01:25:45", seekPoints: [
        {time: "00:10:57", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:12:35", label: "O Come to the Altar", type: SeekPointType.PRAISE_SONG},
        {time: "00:18:02", label: "Psalm 18:2-6, 16-17, 46, 49", type: SeekPointType.BIBLE_VERSE},
        {time: "00:19:20", label: "Rock of Ages (You will Stand)", type: SeekPointType.PRAISE_SONG},
        {time: "00:23:46", label: "Gracefully Broken", type: SeekPointType.PRAISE_SONG},
        {time: "00:28:54", label: "The Wonderful Cross", type: SeekPointType.PRAISE_SONG},
        {time: "00:34:17", label: "Congregational prayer", type: SeekPointType.PRAYER},
        {time: "00:36:01", label: "Communion", type: SeekPointType.COMMUNION},
        {time: "00:44:23", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:23:01", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:24:45", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "uqmaE9JKGtc", message: "First Comes Sacrifice (Ezra 3)", pastor: "Rev. Larry Lee", date: "2020-09-27T16:30:00Z", duration: "01:28:35", seekPoints: [
        {time: "00:10:36", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:11:38", label: "O Praise the Name", type: SeekPointType.PRAISE_SONG},
        {time: "00:16:10", label: "Center", type: SeekPointType.PRAISE_SONG},
        {time: "00:21:08", label: "1 Samuel 2:1-10", type: SeekPointType.BIBLE_VERSE},
        {time: "00:24:18", label: "Gracefully Broken", type: SeekPointType.PRAISE_SONG},
        {time: "00:29:12", label: "Better", type: SeekPointType.PRAISE_SONG},
        {time: "00:33:04", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "00:34:21", label: "Congregational prayer", type: SeekPointType.PRAYER},
        {time: "00:42:06", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:17:32", label: "Forever", type: SeekPointType.PRAISE_SONG},
        {time: "01:22:17", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:22:49", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
]

export default englishServices