import SeekPointType from './seek-point-type';

const cantoneseServices = [
    { youtubeVideoID: "fU-O8G8LB7c", message: "傳揚主名的呼召 -- 路28:44-48", pastor: "王钦慈牧师", date: "2023-09-17T18:10:00Z", duration: "01:25:30", seekPoints: []},

    // https://www.youtube.com/channel/UCwwYzQ3Av9dfyk3mhi-hxuw
    { youtubeVideoID: "ntyMUdXntLU", message: "不是我，是圣灵！(林后3:1-11)", pastor: "Elder Albert Wong", date: "2020-10-18T18:10:00Z", duration: "01:29:14", seekPoints: [
        {time: "00:08:00", label: "Beginning", type: SeekPointType.BEGINNING},
        {time: "00:08:11", label: "真光普照", type: SeekPointType.PRAISE_SONG},
        {time: "00:12:26", label: "生命活水充满我", type: SeekPointType.PRAISE_SONG},
        {time: "00:16:58", label: "Bible verse", type: SeekPointType.UNKNOWN},
        {time: "00:17:45", label: "光和盐", type: SeekPointType.PRAISE_SONG},
        {time: "00:21:25", label: "Congregational prayer", type: SeekPointType.PRAYER},
        {time: "00:27:27", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:18:11", label: "Closing prayer", type: SeekPointType.PRAYER},
        {time: "01:18:53", label: "立志传扬祢的爱", type: SeekPointType.PRAISE_SONG},
        {time: "01:21:38", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:28:26", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "Rl4hT1wifFQ", message: "基督的香气 (林后2:14-17)", pastor: "Rev. Semson Nip", date: "2020-10-11T18:10:00Z", duration: "01:26:05", seekPoints: [
        {time: "00:08:00", label: "Opening prayer", type: SeekPointType.UNKNOWN},
        {time: "00:09:02", label: "举手赞颂", type: SeekPointType.PRAISE_SONG},
        {time: "00:13:27", label: "为祢绽放馨香", type: SeekPointType.PRAISE_SONG},
        {time: "00:17:44", label: "谢谢我主", type: SeekPointType.PRAISE_SONG},
        {time: "00:20:43", label: "Congregational prayer", type: SeekPointType.UNKNOWN},
        {time: "00:24:53", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:17:46", label: "为祢绽放馨香", type: SeekPointType.PRAISE_SONG},
        {time: "01:20:15", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:25:00", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "AlrtccfApe8", message: "指望将来 (林后1:8-11)", pastor: "Rev. Semson Nip", date: "2020-09-27T18:10:00Z", duration: "01:22:19", seekPoints: [
        {time: "00:08:00", label: "Opening prayer", type: SeekPointType.UNKNOWN},
        {time: "00:08:41", label: "将天敞开", type: SeekPointType.PRAISE_SONG},
        {time: "00:12:51", label: "高声颂讚主", type: SeekPointType.PRAISE_SONG},
        {time: "00:16:35", label: "复活的主", type: SeekPointType.PRAISE_SONG},
        {time: "00:20:26", label: "Congregational prayer", type: SeekPointType.UNKNOWN},
        {time: "00:23:30", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:15:00", label: "复活的主", type: SeekPointType.PRAISE_SONG},
        {time: "01:18:45", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:21:17", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
];

export default cantoneseServices;