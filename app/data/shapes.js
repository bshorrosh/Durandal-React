define([], function () {

        return {

            SHAPES: {
                
                robot: [
                    '// shoulder',
                    'rect background: white; height:25px; width: 150px; left: 20px; top: 100px;',
                    '',
                    '// left arm',
                    'ellipse width:30px; height:150px; left: 5px; top:80px; background: lightgray;',
                    '',
                    '// right arm',
                    'ellipse width:30px; height:150px; left:145px; top: 80px; background: darkgray;',
                    '',
                    '// head',
                    'ellipse left:40px; background: #EEE;',
                    '',
                    '// ears',
                    'rect left:28px; top: 45; width: 10px; height: 30px; background: lightyellow;',
                    '',
                    'rect left:142px; top: 45; width: 10px; height: 30px; background: lightyellow;',
                    '',
                    '',
                    '// left leg',
                    'ellipse background: gray; width:30px; height:170px; top:210px; left: 40px;',
                    '',
                    '// right leg',
                    'ellipse background: gray; width:30px; height:170px; top:210px; left: 110px;',
                    '',
                    '// body',
                    'rect height: 100px; top:105px; left: 40px;',
                    'rect height: 50px; top:210px; left: 40px; ',
                    '',
                    '// eyes',
                    'ellipse width:20; height:20; background: gray; left: 50; top: 30; border: 3px solid darkgray;',
                    '',
                    'ellipse width:10; height:10; background: white; left: 55; top: 35; border: 3px solid darkgray;',
                    '',
                    'ellipse width:20; height:20; background: gray; left: 100; top: 30; border: 3px solid darkgray;',
                    '',
                    '// mouth',
                    'ellipse width:40; height:5; background: gray; left: 70; top: 70; -webkit-transform:rotate(-10deg); border: 2px solid darkgray;'
                ].join('\n'),

                react: [
                    'React label',
                    'text value:React; color: #00D8FF; font-size: 48px; text-shadow: 1px 1px 3px #555; padding: 10px; left: 100px; top: 100px;',
                    '',
                    '// left logo',
                    'rect background:url(lib/react/resources/react.png) no-repeat; border: none; width: 38; height: 38; left: 60px; top: 120px;',
                    '',
                    '// right logo',
                    'rect background:url(lib/react/resources/react.png) no-repeat; border: none; width: 38; height: 38; left: 250px; top: 120px;'
                ].join('\n')
            }
        }
    })