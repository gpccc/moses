import SeekPointType from './seek-point-type';

const englishServices = [
    { youtubeVideoID: "NSWjZdNCdGE", message: "Redeeming the Time — Ephesians 5:14-21", pastor: "Brent Gambrell", date: "2023-09-17T16:30:00Z", duration: "01:21:35", seekPoints: [] },
    { youtubeVideoID: "WMgSQBo5YY8", message: "The Great Feast — Matt. 22:1-22", pastor: "Pastor Larry Lee", date: "2023-09-10T16:30:00Z", duration: "01:19:15", seekPoints: [] },

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

    { youtubeVideoID: "oUgwSCi84wE", message: "Answering in Parables — Matt. 21:23-46", pastor: "Pastor Larry Lee", date: "2023-09-03T16:30:00Z", duration: "01:23:40", seekPoints: [] },
    { youtubeVideoID: "W2DrUImhVYI", message: "Judgement on Jerusalem — Matt. 21:12-22", pastor: "Pastor Chris Sung", date: "2023-08-27T16:30:00Z", duration: "01:07:05", seekPoints: [] },
    { youtubeVideoID: "jNUO0Q6tGKc", message: "Last and First -- Matt. 20:1-34", pastor: "Pastor Larry Lee", date: "2023-08-20T16:30:00Z", duration: "01:18:10", seekPoints: [] },
    { youtubeVideoID: "u_X8le7mFi4", message: "Broken -- Matt. 19:1-30", pastor: "Pastor Larry Lee", date: "2023-08-13T16:30:00Z", duration: "01:28:30", seekPoints: [] },
    { youtubeVideoID: "648IodvGKr8", message: "Being Faithful to Our Calling", pastor: "Bobby & Angie Cox", date: "2023-08-06T16:30:00Z", duration: "01:20:55", seekPoints: [] },
    { youtubeVideoID: "iPP7dgcZh_4", message: "True Humility -- Matt. 18:1-35", pastor: "Pastor Larry Lee", date: "2023-07-30T16:30:00Z", duration: "01:22:01", seekPoints: [] },
    { youtubeVideoID: "WAouZ0anz2I", message: "Death and Taxes -- Matt. 17:1-27", pastor: "Pastor Larry Lee", date: "2023-07-23T16:30:00Z", duration: "01:27:10", seekPoints: [] },
]

export default englishServices