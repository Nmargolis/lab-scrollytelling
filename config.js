var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1Ijoibm1hcmdvbGlzbWIiLCJhIjoiY2tqMjJpbzNzMjJ4aTJycXRhMjA5bmxwcSJ9.1yS37OYWAK1G3YLnjJsrUw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Ruhi Lab',
    subtitle: 'Where we do research',
    byline: '',
    footer: 'UC Berkeley',
    chapters: [
        {
            id: 'pinnacles',
            alignment: 'right',
            hidden: false,
            title: 'Pinnacles National Park',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-121.17883, 36.50021],
                zoom: 16.04,
                pitch: 77.50,
                bearing: -47.06
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sierra-nevada',
            alignment: 'left',
            hidden: false,
            title: 'Sierra Nevada Aquatic Research Lab (SNARL)',
            image: './path/to/image/source.png',
            description: '<a href="https://www.berkeley.edu" target="_blank">This is a link,</a>',
            location: {
                center: [-118.83326, 37.61400],
                zoom: 14.00,
                pitch: 90.00,
                bearing: -174.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'delta',
            alignment: 'right',
            hidden: false,
            title: 'SF Bay Delta',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-122.02967, 38.07956],
                zoom: 10.84,
                pitch: 60.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }

    ]
};
