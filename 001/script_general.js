(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('begin', x, this);
                    k['call'](this);
                };
                w['bind']('begin', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"borderSize":0,"layout":"absolute","propagateClick":false,"paddingLeft":0,"width":"100%","paddingTop":0,"toolTipHorizontalAlign":"center","scrollBarVisible":"rollOver","horizontalAlign":"left","paddingBottom":0,"paddingRight":0,"defaultVRPointer":"laser","desktopMipmappingEnabled":false,"vrPolyfillScale":0.75,"scrollBarWidth":10,"scrollBarOpacity":0.5,"verticalAlign":"top","gap":10,"mediaActivationMode":"window","start":"this.init()","borderRadius":0,"class":"Player","id":"rootPlayer","mobileMipmappingEnabled":false,"children":["this.MainViewer","this.Container_BD9BCA18_B709_43A6_41E3_615B2F2F9BD6"],"backgroundColorRatios":[0],"downloadEnabled":false,"height":"100%","backgroundColorDirection":"vertical","backgroundColor":["#F2F2F2"],"scrollBarColor":"#000000","scripts":{"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"unregisterKey":TDV.Tour.Script.unregisterKey,"getMainViewer":TDV.Tour.Script.getMainViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"registerKey":TDV.Tour.Script.registerKey,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"mixObject":TDV.Tour.Script.mixObject,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPixels":TDV.Tour.Script.getPixels,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"init":TDV.Tour.Script.init,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"initQuiz":TDV.Tour.Script.initQuiz,"cloneCamera":TDV.Tour.Script.cloneCamera,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setLocale":TDV.Tour.Script.setLocale,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"historyGoBack":TDV.Tour.Script.historyGoBack,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"historyGoForward":TDV.Tour.Script.historyGoForward,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getOverlays":TDV.Tour.Script.getOverlays,"quizShowScore":TDV.Tour.Script.quizShowScore,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showWindow":TDV.Tour.Script.showWindow,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showPopupImage":TDV.Tour.Script.showPopupImage,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setValue":TDV.Tour.Script.setValue,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"resumePlayers":TDV.Tour.Script.resumePlayers,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizFinish":TDV.Tour.Script.quizFinish,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizStart":TDV.Tour.Script.quizStart,"getComponentByName":TDV.Tour.Script.getComponentByName,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"openLink":TDV.Tour.Script.openLink,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"shareSocial":TDV.Tour.Script.shareSocial,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaByName":TDV.Tour.Script.getMediaByName,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"initAnalytics":TDV.Tour.Script.initAnalytics,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"translate":TDV.Tour.Script.translate,"clone":TDV.Tour.Script.clone,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getKey":TDV.Tour.Script.getKey,"playAudioList":TDV.Tour.Script.playAudioList,"isPanorama":TDV.Tour.Script.isPanorama,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"existsKey":TDV.Tour.Script.existsKey},"minHeight":20,"scrollBarMargin":2,"minWidth":20,"contentOpaque":false,"mouseWheelEnabled":true,"overflow":"hidden","shadow":false,"backgroundOpacity":1,"backgroundPreloadEnabled":true,"data":{"name":"Player497","textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"pitch":1,"volume":1,"stopBackgroundAudio":false,"rate":1,"speechOnTooltip":false},"locales":{"en":"locale/en.txt"},"defaultLocale":"en"},"definitions": [{"progressHeight":10,"displayTooltipInSurfaceSelection":true,"surfaceReticleOpacity":0.6,"paddingLeft":0,"left":0,"subtitlesFontColor":"#FFFFFF","subtitlesBorderSize":0,"toolTipHorizontalAlign":"center","toolTipShadowVerticalLength":0,"progressRight":0,"toolTipShadowColor":"#333333","playbackBarBorderSize":0,"right":"0%","progressOpacity":1,"paddingRight":0,"progressBarBorderRadius":0,"playbackBarHeadBorderColor":"#000000","progressBorderSize":0,"vrPointerSelectionTime":2000,"subtitlesTop":0,"playbackBarOpacity":1,"progressBarBackgroundColorDirection":"vertical","playbackBarBottom":5,"subtitlesFontWeight":"normal","playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesBottom":50,"playbackBarHeadShadowVerticalLength":0,"subtitlesPaddingLeft":5,"toolTipShadowSpread":0,"displayTooltipInTouchScreens":true,"playbackBarBackgroundOpacity":1,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipBorderRadius":3,"toolTipShadowOpacity":1,"subtitlesTextShadowColor":"#000000","toolTipFontFamily":"Arial","class":"ViewerArea","toolTipFontWeight":"normal","toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontStyle":"normal","subtitlesPaddingRight":5,"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeight":10,"toolTipFontSize":"1.11vmin","toolTipTextShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"subtitlesPaddingBottom":5,"subtitlesFontSize":"3vmin","playbackBarHeadWidth":6,"minWidth":100,"surfaceReticleSelectionColor":"#FFFFFF","progressBarBorderColor":"#000000","minHeight":50,"playbackBarHeadShadowHorizontalLength":0,"progressBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"toolTipTextShadowBlurRadius":3,"top":0,"subtitlesBackgroundOpacity":0.2,"progressBorderRadius":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"toolTipDisplayTime":600,"playbackBarHeadShadowBlurRadius":3,"borderSize":0,"playbackBarProgressBorderRadius":0,"progressBackgroundColorRatios":[0],"propagateClick":false,"playbackBarProgressBackgroundColor":["#3399FF"],"surfaceReticleSelectionOpacity":1,"subtitlesBorderColor":"#FFFFFF","paddingTop":0,"firstTransitionDuration":0,"toolTipPaddingLeft":6,"subtitlesTextShadowHorizontalLength":1,"toolTipTextShadowOpacity":0,"paddingBottom":0,"progressLeft":0,"playbackBarLeft":0,"toolTipBorderColor":"#767676","subtitlesTextShadowBlurRadius":0,"vrPointerColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"subtitlesEnabled":true,"toolTipFontColor":"#606060","subtitlesFontFamily":"Arial","subtitlesTextDecoration":"none","progressBarBorderSize":0,"transitionMode":"blending","vrPointerSelectionColor":"#FF6600","toolTipPaddingRight":6,"subtitlesPaddingTop":5,"transitionDuration":500,"progressBorderColor":"#000000","playbackBarHeadHeight":15,"borderRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowColor":"#000000","id":"MainViewer","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesShadow":false,"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"toolTipShadowHorizontalLength":0,"subtitlesOpacity":1,"subtitlesBackgroundColor":"#000000","subtitlesGap":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBorderColor":"#000000","height":"100%","subtitlesTextShadowVerticalLength":1,"playbackBarHeadBorderSize":0,"subtitlesHorizontalAlign":"center","toolTipPaddingBottom":4,"toolTipOpacity":1,"subtitlesVerticalAlign":"bottom","progressBackgroundColor":["#FFFFFF"],"subtitlesTextShadowOpacity":1,"progressBarOpacity":1,"playbackBarHeadBorderRadius":0,"doubleClickAction":"toggle_fullscreen","playbackBarHeadOpacity":1,"playbackBarProgressOpacity":1,"playbackBarHeadShadow":true,"toolTipShadowBlurRadius":3,"shadow":false,"progressBottom":0,"toolTipBorderSize":1,"surfaceReticleColor":"#FFFFFF","progressBackgroundOpacity":1,"toolTipPaddingTop":4,"data":{"name":"Main Viewer"}},{"id":"panorama_BED61EA5_B708_C0EE_41CE_2C343F908B72","hfov":360,"hfovMin":"150%","hfovMax":130,"label":trans('panorama_BED61EA5_B708_C0EE_41CE_2C343F908B72.label'),"data":{"label":"001"},"partial":false,"thumbnailUrl":"media/panorama_BED61EA5_B708_C0EE_41CE_2C343F908B72_t.jpg","frames":[{"thumbnailUrl":"media/panorama_BED61EA5_B708_C0EE_41CE_2C343F908B72_t.jpg","cube":{"levels":[{"width":12288,"tags":"ondemand","height":2048,"url":"media/panorama_BED61EA5_B708_C0EE_41CE_2C343F908B72_0/{face}/0/{row}_{column}.jpg","colCount":24,"class":"TiledImageResourceLevel","rowCount":4},{"width":6144,"tags":"ondemand","height":1024,"url":"media/panorama_BED61EA5_B708_C0EE_41CE_2C343F908B72_0/{face}/1/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel","rowCount":2},{"width":3072,"tags":["ondemand","preload"],"height":512,"url":"media/panorama_BED61EA5_B708_C0EE_41CE_2C343F908B72_0/{face}/2/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"pitch":0,"vfov":180,"class":"Panorama"},{"id":"panorama_BED61EA5_B708_C0EE_41CE_2C343F908B72_camera","automaticZoomSpeed":10,"initialSequence":"this.sequence_BE52C643_B70B_43AA_41E6_3E8AD1628152","class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"textDecoration":"none","cursor":"hand","borderSize":2,"fontSize":"18.04px","propagateClick":false,"paddingLeft":0,"left":"8.09%","paddingTop":0,"toolTipHorizontalAlign":"center","paddingBottom":0,"paddingRight":0,"fontFamily":"Helvetica Bold","borderColor":"#000000","text":trans('Label_BA97A9EC_B707_407E_41D8_8D2241E8288D.text'),"fontStyle":"normal","verticalAlign":"middle","width":"7.396%","borderRadius":16,"id":"Label_BA97A9EC_B707_407E_41D8_8D2241E8288D","height":32.05,"class":"Label","backgroundColorRatios":[],"backgroundColorDirection":"vertical","fontColor":"#000000","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_A63828B2_B709_40EA_41D6_3557B524E4EB, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 0)","minHeight":1,"minWidth":1,"horizontalAlign":"center","data":{"name":"Label3700"},"top":"36.63%","shadow":false,"backgroundOpacity":1,"backgroundColor":[],"fontWeight":"normal"},{"id":"mainPlayList","items":["this.PanoramaPlayListItem_A63828B2_B709_40EA_41D6_3557B524E4EB","this.PanoramaPlayListItem_A638C8B2_B709_40EA_41CF_DEE3258128CB","this.PanoramaPlayListItem_A638E8B2_B709_40EA_41D2_B965FD245B38","this.PanoramaPlayListItem_A63888B2_B709_40EA_41CE_9E0545EFE24C","this.PanoramaPlayListItem_A63868B2_B709_40EA_41E4_8C88794B2EF3"],"class":"PlayList"},{"id":"panorama_BD3188E2_B709_C06A_418F_C96913C045E2","hfov":360,"hfovMin":"150%","hfovMax":130,"label":trans('panorama_BD3188E2_B709_C06A_418F_C96913C045E2.label'),"data":{"label":"001"},"partial":false,"thumbnailUrl":"media/panorama_BD3188E2_B709_C06A_418F_C96913C045E2_t.jpg","frames":[{"thumbnailUrl":"media/panorama_BD3188E2_B709_C06A_418F_C96913C045E2_t.jpg","cube":{"levels":[{"width":12288,"tags":"ondemand","height":2048,"url":"media/panorama_BD3188E2_B709_C06A_418F_C96913C045E2_0/{face}/0/{row}_{column}.jpg","colCount":24,"class":"TiledImageResourceLevel","rowCount":4},{"width":6144,"tags":"ondemand","height":1024,"url":"media/panorama_BD3188E2_B709_C06A_418F_C96913C045E2_0/{face}/1/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel","rowCount":2},{"width":3072,"tags":["ondemand","preload"],"height":512,"url":"media/panorama_BD3188E2_B709_C06A_418F_C96913C045E2_0/{face}/2/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"pitch":0,"vfov":180,"class":"Panorama"},{"id":"panorama_BD06B70A_B70B_41BA_41CD_07B6507A63D4","hfov":360,"hfovMin":"150%","hfovMax":130,"label":trans('panorama_BD06B70A_B70B_41BA_41CD_07B6507A63D4.label'),"data":{"label":"002"},"partial":false,"thumbnailUrl":"media/panorama_BD06B70A_B70B_41BA_41CD_07B6507A63D4_t.jpg","frames":[{"thumbnailUrl":"media/panorama_BD06B70A_B70B_41BA_41CD_07B6507A63D4_t.jpg","cube":{"levels":[{"width":12288,"tags":"ondemand","height":2048,"url":"media/panorama_BD06B70A_B70B_41BA_41CD_07B6507A63D4_0/{face}/0/{row}_{column}.jpg","colCount":24,"class":"TiledImageResourceLevel","rowCount":4},{"width":6144,"tags":"ondemand","height":1024,"url":"media/panorama_BD06B70A_B70B_41BA_41CD_07B6507A63D4_0/{face}/1/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel","rowCount":2},{"width":3072,"tags":["ondemand","preload"],"height":512,"url":"media/panorama_BD06B70A_B70B_41BA_41CD_07B6507A63D4_0/{face}/2/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"pitch":0,"vfov":180,"class":"Panorama"},{"id":"panorama_BD06B70A_B70B_41BA_41CD_07B6507A63D4_camera","automaticZoomSpeed":10,"initialSequence":"this.sequence_BE603C61_B70B_4066_41DE_3E156A1797E7","class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"textDecoration":"none","cursor":"hand","borderSize":2,"fontSize":"2vmin","propagateClick":false,"paddingLeft":0,"left":"17.57%","paddingTop":0,"toolTipHorizontalAlign":"center","paddingBottom":0,"paddingRight":0,"fontFamily":"Helvetica Bold","borderColor":"#000000","text":trans('Label_BAB11C4A_B718_C7BA_41DA_82C256A60756.text'),"fontStyle":"normal","verticalAlign":"middle","width":"7.396%","borderRadius":16,"id":"Label_BAB11C4A_B718_C7BA_41DA_82C256A60756","height":32.05,"class":"Label","backgroundColorRatios":[],"backgroundColorDirection":"vertical","fontColor":"#000000","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_A638C8B2_B709_40EA_41CF_DEE3258128CB, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","minHeight":1,"minWidth":1,"horizontalAlign":"center","data":{"name":"Label3700"},"top":"36.63%","shadow":false,"backgroundOpacity":1,"backgroundColor":[],"fontWeight":"normal"},{"id":"panorama_BED4DADE_B70B_405A_41E6_74A5A30BC6FA","hfov":360,"hfovMin":"150%","hfovMax":130,"label":trans('panorama_BED4DADE_B70B_405A_41E6_74A5A30BC6FA.label'),"data":{"label":"002"},"partial":false,"thumbnailUrl":"media/panorama_BED4DADE_B70B_405A_41E6_74A5A30BC6FA_t.jpg","frames":[{"thumbnailUrl":"media/panorama_BED4DADE_B70B_405A_41E6_74A5A30BC6FA_t.jpg","cube":{"levels":[{"width":12288,"tags":"ondemand","height":2048,"url":"media/panorama_BED4DADE_B70B_405A_41E6_74A5A30BC6FA_0/{face}/0/{row}_{column}.jpg","colCount":24,"class":"TiledImageResourceLevel","rowCount":4},{"width":6144,"tags":"ondemand","height":1024,"url":"media/panorama_BED4DADE_B70B_405A_41E6_74A5A30BC6FA_0/{face}/1/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel","rowCount":2},{"width":3072,"tags":["ondemand","preload"],"height":512,"url":"media/panorama_BED4DADE_B70B_405A_41E6_74A5A30BC6FA_0/{face}/2/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"pitch":0,"vfov":180,"class":"Panorama"},{"borderSize":0,"layout":"absolute","propagateClick":false,"horizontalAlign":"left","paddingLeft":0,"left":"0%","width":"100%","paddingTop":0,"toolTipHorizontalAlign":"center","paddingBottom":0,"paddingRight":0,"scrollBarVisible":"rollOver","scrollBarWidth":10,"scrollBarOpacity":0.5,"verticalAlign":"top","gap":10,"borderRadius":0,"id":"Container_BD9BCA18_B709_43A6_41E3_615B2F2F9BD6","children":["this.Label_BA39AD18_B70B_C1A6_41E5_E6929038B22E","this.Label_BA97A9EC_B707_407E_41D8_8D2241E8288D","this.Label_BAB11C4A_B718_C7BA_41DA_82C256A60756","this.Label_BABA3F8A_B718_C0BA_41DD_0C6DB97D5A15","this.Label_BAA2343C_B718_C7DE_41DC_BA7B2C3CCA31","this.WebFrame_B916DE4A_B719_43BA_41DC_EA266DC63488"],"class":"Container","backgroundColorRatios":[0,1],"height":"14.69%","backgroundColorDirection":"vertical","backgroundColor":["#FFFFFF","#FFFFFF"],"scrollBarColor":"#000000","minHeight":1,"scrollBarMargin":2,"minWidth":1,"contentOpaque":false,"data":{"name":"Container2858"},"top":"0%","overflow":"scroll","shadow":false,"backgroundOpacity":1},{"textDecoration":"none","cursor":"hand","borderSize":2,"fontSize":"18.04px","propagateClick":false,"paddingLeft":0,"left":"46.02%","paddingTop":0,"toolTipHorizontalAlign":"center","paddingBottom":0,"paddingRight":0,"fontFamily":"Helvetica Bold","borderColor":"#000000","text":trans('Label_BA39AD18_B70B_C1A6_41E5_E6929038B22E.text'),"fontStyle":"normal","verticalAlign":"middle","width":"7.396%","borderRadius":16,"id":"Label_BA39AD18_B70B_C1A6_41E5_E6929038B22E","height":32.05,"class":"Label","backgroundColorRatios":[],"backgroundColorDirection":"vertical","fontColor":"#000000","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_A63868B2_B709_40EA_41E4_8C88794B2EF3, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 4)","minHeight":1,"minWidth":1,"horizontalAlign":"center","data":{"name":"Label3700"},"top":"36.63%","shadow":false,"backgroundOpacity":1,"backgroundColor":[],"fontWeight":"normal"},{"id":"panorama_BED4DADE_B70B_405A_41E6_74A5A30BC6FA_camera","automaticZoomSpeed":10,"initialSequence":"this.sequence_BE570014_B70B_BFAE_41B0_A18F69DF2979","class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"scrollEnabled":true,"borderSize":0,"propagateClick":false,"paddingLeft":0,"paddingTop":0,"toolTipHorizontalAlign":"center","right":"5.28%","paddingBottom":0,"paddingRight":0,"width":"26.457%","borderRadius":0,"id":"WebFrame_B916DE4A_B719_43BA_41DC_EA266DC63488","class":"WebFrame","backgroundColorRatios":[0],"url":"https://mixlr.com/users/2822526/embed","backgroundColorDirection":"vertical","backgroundColor":["#FFFFFF"],"minHeight":1,"minWidth":1,"height":"100%","data":{"name":"WebFrame6247"},"top":"0%","insetBorder":false,"shadow":false,"backgroundOpacity":1},{"textDecoration":"none","cursor":"hand","borderSize":2,"fontSize":"2vmin","propagateClick":false,"paddingLeft":0,"left":"36.54%","paddingTop":0,"toolTipHorizontalAlign":"center","paddingBottom":0,"paddingRight":0,"fontFamily":"Helvetica Bold","borderColor":"#000000","text":trans('Label_BAA2343C_B718_C7DE_41DC_BA7B2C3CCA31.text'),"fontStyle":"normal","verticalAlign":"middle","width":"7.396%","borderRadius":16,"id":"Label_BAA2343C_B718_C7DE_41DC_BA7B2C3CCA31","height":32.05,"class":"Label","backgroundColorRatios":[],"backgroundColorDirection":"vertical","fontColor":"#000000","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_A63888B2_B709_40EA_41CE_9E0545EFE24C, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 3)","minHeight":1,"minWidth":1,"horizontalAlign":"center","data":{"name":"Label3700"},"top":"36.63%","shadow":false,"backgroundOpacity":1,"backgroundColor":[],"fontWeight":"normal"},{"id":"panorama_BD3188E2_B709_C06A_418F_C96913C045E2_camera","automaticZoomSpeed":10,"initialSequence":"this.sequence_BE6F3777_B709_406A_41DB_4E23C6C18B1F","class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"textDecoration":"none","cursor":"hand","borderSize":2,"fontSize":"2vmin","propagateClick":false,"paddingLeft":0,"left":"27.06%","paddingTop":0,"toolTipHorizontalAlign":"center","paddingBottom":0,"paddingRight":0,"fontFamily":"Helvetica Bold","borderColor":"#000000","text":trans('Label_BABA3F8A_B718_C0BA_41DD_0C6DB97D5A15.text'),"fontStyle":"normal","verticalAlign":"middle","width":"7.396%","borderRadius":16,"id":"Label_BABA3F8A_B718_C0BA_41DD_0C6DB97D5A15","height":32.05,"class":"Label","backgroundColorRatios":[],"backgroundColorDirection":"vertical","fontColor":"#000000","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_A638E8B2_B709_40EA_41D2_B965FD245B38, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 2)","minHeight":1,"minWidth":1,"horizontalAlign":"center","data":{"name":"Label3700"},"top":"36.63%","shadow":false,"backgroundOpacity":1,"backgroundColor":[],"fontWeight":"normal"},{"id":"panorama_BD211053_B709_5FAA_41E2_A6770DA5C122","hfov":360,"hfovMin":"150%","hfovMax":130,"label":trans('panorama_BD211053_B709_5FAA_41E2_A6770DA5C122.label'),"data":{"label":"002"},"partial":false,"thumbnailUrl":"media/panorama_BD211053_B709_5FAA_41E2_A6770DA5C122_t.jpg","frames":[{"thumbnailUrl":"media/panorama_BD211053_B709_5FAA_41E2_A6770DA5C122_t.jpg","cube":{"levels":[{"width":12288,"tags":"ondemand","height":2048,"url":"media/panorama_BD211053_B709_5FAA_41E2_A6770DA5C122_0/{face}/0/{row}_{column}.jpg","colCount":24,"class":"TiledImageResourceLevel","rowCount":4},{"width":6144,"tags":"ondemand","height":1024,"url":"media/panorama_BD211053_B709_5FAA_41E2_A6770DA5C122_0/{face}/1/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel","rowCount":2},{"width":3072,"tags":["ondemand","preload"],"height":512,"url":"media/panorama_BD211053_B709_5FAA_41E2_A6770DA5C122_0/{face}/2/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"pitch":0,"vfov":180,"class":"Panorama"},{"id":"MainViewerPanoramaPlayer","arrowKeysAction":"translate","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","zoomEnabled":true,"viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"surfaceSelectionEnabled":false,"class":"PanoramaPlayer"},{"id":"panorama_BD211053_B709_5FAA_41E2_A6770DA5C122_camera","automaticZoomSpeed":10,"initialSequence":"this.sequence_BE69C8FE_B709_405A_41E6_ABE53BF09A91","class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"id":"sequence_BE52C643_B70B_43AA_41E6_3E8AD1628152","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence"},{"id":"PanoramaPlayListItem_A63828B2_B709_40EA_41D6_3557B524E4EB","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_BD3188E2_B709_C06A_418F_C96913C045E2_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem","media":"this.panorama_BD3188E2_B709_C06A_418F_C96913C045E2"},{"id":"PanoramaPlayListItem_A638C8B2_B709_40EA_41CF_DEE3258128CB","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_BD211053_B709_5FAA_41E2_A6770DA5C122_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PanoramaPlayListItem","media":"this.panorama_BD211053_B709_5FAA_41E2_A6770DA5C122"},{"id":"PanoramaPlayListItem_A638E8B2_B709_40EA_41D2_B965FD245B38","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_BED61EA5_B708_C0EE_41CE_2C343F908B72_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","class":"PanoramaPlayListItem","media":"this.panorama_BED61EA5_B708_C0EE_41CE_2C343F908B72"},{"id":"PanoramaPlayListItem_A63888B2_B709_40EA_41CE_9E0545EFE24C","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_BED4DADE_B70B_405A_41E6_74A5A30BC6FA_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)","class":"PanoramaPlayListItem","media":"this.panorama_BED4DADE_B70B_405A_41E6_74A5A30BC6FA"},{"id":"PanoramaPlayListItem_A63868B2_B709_40EA_41E4_8C88794B2EF3","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_BD06B70A_B70B_41BA_41CD_07B6507A63D4_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)","class":"PanoramaPlayListItem","media":"this.panorama_BD06B70A_B70B_41BA_41CD_07B6507A63D4"},{"id":"sequence_BE603C61_B70B_4066_41DE_3E156A1797E7","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence"},{"id":"sequence_BE570014_B70B_BFAE_41B0_A18F69DF2979","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence"},{"id":"sequence_BE6F3777_B709_406A_41DB_4E23C6C18B1F","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence"},{"id":"sequence_BE69C8FE_B709_405A_41E6_ABE53BF09A91","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence"}]};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.0.6.js.map
//Generated with v2021.0.6, Fri Apr 9 2021