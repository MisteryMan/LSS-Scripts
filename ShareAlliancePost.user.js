// ==UserScript==
// @name ShareAlliancePost
// @namespace Missionchief
// @version 3.4.0
// @author jalibu, JuMaHo
// @include https://www.missionchief.com/missions/*
// ==/UserScript==
(() => {

    'use strict';

    const jumpNext = false; // Set to 'true', to jump to next mission after submitting an alert.
    const enableKeyboard = true; // Set to 'false', to disable keyboard shortcuts.
    const shortcutKeys = [17, 68]; // 17 = ctrl, 68 = d
    const defaultPostToChat = false; // Set to 'false', to disable default post in alliance chat.
    const messages = ['Just for making money ;-), %ADDRESS% ', // First entry is default
        '### %ADDRESS% # Fire spread ###,',

        '### %ADDRESS% # Automatic Alarm ###',

        '### %ADDRESS% # Non confirmed fire, Odor of smoke ### ',

        '### %ADDRESS% # Non confirmed fire, Odor of smoke,unknown number of victims ###',

        '### %ADDRESS% # Confirmed fire, black smoke ###',

        '### %ADDRESS% # Confirmed fire, PD on Scene,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # Confirmed fire, EMS on Scene,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # Confirmed fire, EMS on scene, CPR in progress ###',

        '### %ADDRESS% # Confirmed fire, EMS on scene, CPR in progress,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # Confirmed emergency ###',

        '### %ADDRESS% # Confirmed emergency, many calls ###',

        '### %ADDRESS% # Confirmed emergency,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # Confirmed emergency, EMS on scene, CPR in progress ###',

        '### %ADDRESS% # Confirmed emergency, EMS on scene, CPR in progress,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 10-28,Code 2, unknown number of victims ###',

        '### %ADDRESS% # 10-28,Code 2, PD on Scene,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 10-28,Code 2, 1 Person trapped,(Subway or railroad fire, emergency or smoke condition),%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 10-28,Code 2, 1 Person trapped,EMS on Scene,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 10-36, unknown number of victims ###',

        '### %ADDRESS% # 10-36, %PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 10-36, Code 3, EMS on scene,CPR in progress,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 10-36, Code 4, 1 Person is trapped,(Automobile accident or emergency),%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 10-36, Code 4, 1 Person is trapped, EMS and PD on Scene,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 10-40,10-25,Code 1, unknown number of victims ###',

        '### %ADDRESS% # 10-40,10-25,Code 1(transformer vault fire),%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 10-40,10-25,Code 1, EMS on scene, CPR in Progress ###',

        '### %ADDRESS% # 10-60 Major Emergency Response,unknown number of victims ###',

        '### %ADDRESS% # 10-60 Major Emergency Response,%PATIENTS_LEFT% victims###',

        '### %ADDRESS% # 10-60, Code 1, Major Emergency Response,unknown number of victims ###',

        '### %ADDRESS% # 10-60, Code 1, Major Emergency Response,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 10-75,unknown number of victims ###',

        '### %ADDRESS% # 10-75, %PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 10-75,all Hands,unknown number of victims ###',

        '### %ADDRESS% # 10-75,all Hands,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 10-75,all Hands,Persons trapped,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 10-75,all Hands,Persons trapped at 2nd Floor,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 10-76,all Hands,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 10-76,all Hands,unknown number of victims ###',

        '### %ADDRESS% # 10-76,all Hands, Persons trapped on the 7th floor,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 10-80, %PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 10-86, %unknown number of victims ###',

        '### %ADDRESS% # 10-86, Persons trapped on the 18th floor,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 1st Alarm ###',

        '### %ADDRESS% # 1st Alarm,Animal rescue ###',

        '### %ADDRESS% # 1st Alarm,unknown number of victims ###',

        '### %ADDRESS% # 1st Alarm,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 1st Alarm, EMS on scene,CPR in Progress,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 1st Alarm, at least 1 Person trapped on the 2nd floor,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 2nd Alarm, Animal rescue ###',

        '### %ADDRESS% # 2nd Alarm, unknown number of victims ###',

        '### %ADDRESS% # 2nd Alarm, PD on Scene,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 2nd Alarm, Persons trapped,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 2nd Alarm, Persons trapped,EMS on scene,CPR in Progress,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 2nd Alarm, at least 1 Person trapped on the 2nd floor,unknown number of victims,PD on Scene ###',

        '### %ADDRESS% # 2nd Alarm, at least 1 Person trapped on the 2nd floor,%PATIENTS_LEFT% victims,PD on Scene ###',

        '### %ADDRESS% # 2nd Alarm, EMS on scene,CPR in Progress,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 2nd Alarm, Med Code 10,%PATIENTS_LEFT% victims, EMS Supervisor on Scene ###',

        '### %ADDRESS% # 2nd Alarm, Med Code 20,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 2nd Alarm, Med Code 20,%PATIENTS_LEFT% victims, EMS Supervisor on Scene ###',

        '### %ADDRESS% # 2nd Alarm, Med Code 30,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 2nd Alarm, Med Code 30,%PATIENTS_LEFT% victims, EMS Supervisor on Scene ###',

        '### %ADDRESS% # 2nd Alarm, 10-99,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 2nd Alarm, 10-99,Med Code 10#,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 3rd Alarm, unknown number of victims ###',

        '### %ADDRESS% # 3rd Alarm, %PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 3nd Alarm, Med Code 10,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 3nd Alarm, Med Code 10,%PATIENTS_LEFT% victims, EMS Supervisor on Scene ###',

        '### %ADDRESS% # 3nd Alarm, Med Code 20,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 3nd Alarm, Med Code 20,%PATIENTS_LEFT% victims, EMS Supervisor on Scene ###',

        '### %ADDRESS% # 3nd Alarm, Med Code 30,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 3nd Alarm, Med Code 30,%PATIENTS_LEFT% victims, EMS Supervisor on Scene ###',

        '### %ADDRESS% # 4th Alarm, unknown number of victims ###',

        '### %ADDRESS% # 4th Alarm, %PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 4th Alarm, PD on Scene,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 4th Alarm,%PATIENTS_LEFT% victims trapped on the 7th floor ###',

        '### %ADDRESS% # 4th Alarm,Med Code 0,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # 4th Alarm,Med Code 0,%PATIENTS_LEFT% victims, EMS Supervisor on Scene ###',

        '### %ADDRESS% # Tech 1,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # Tech 1, Person is trapped#,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # Tech 2,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # Tech 2, Person is trapped,%PATIENTS_LEFT% victims ###',

        '### %ADDRESS% # Police Operation,10-39 ###(FD units standing by at interagency incident)',

        '### %ADDRESS% # Police Operation,%PATIENTS_LEFT% victims ###',

        '1 Car 4 the Money,%ADDRESS% '
    ];



    // Create Button and add event listener

    const initButtons = () => {

        let btnMarkup = '<div class="btn-group" style="margin-left: 5px; margin-right: 5px;">';



        btnMarkup += '<a href="#" class="btn btn-success btn-sm alert_notify_alliance" title="Alarmieren, im Verband freigeben und Nachricht in Verbands-Chat">';

        btnMarkup += '<img class="icon icons8-Phone-Filled" src="/images/icons8-phone_filled.svg" width="18" height="18">';

        btnMarkup += '<img class="icon icons8-Share" src="/images/icons8-share.svg" width="20" height="20">';

        btnMarkup += '<span class="glyphicon glyphicon-bullhorn" style="font-size: 13px;"></span>';

        btnMarkup += '</a></div>';



        let optionsBtnMarkup = '<a href="#" id="openAllianceShareOptions" class="btn btn-sm btn-default" title="Einstellungen" style="margin: 0">';

        optionsBtnMarkup += '<span class="glyphicon glyphicon-option-horizontal"></span></a>';



        optionsBtnMarkup += '<div class="btn btn-sm btn-default" style="margin:0; padding: 1px; display: none;" id="allianceShareOptions"><input type="text" id="allianceShareText" value="' + messages[0] + '">';

        optionsBtnMarkup += '<label style="margin-left: 2px; margin-right: 2px;"><input type="checkbox" ' + (defaultPostToChat ? 'checked' : '') + ' id="postToChat" name="postToChat" value="true">An VB Chat?</label>';



        optionsBtnMarkup += '<div style="text-align: left;"><ul>';

        $.each(messages, (index, msg) => {

            optionsBtnMarkup += '<li class="customAllianceShareText">' + msg + '</li>';

        });

        optionsBtnMarkup += '</ul></div>';

        optionsBtnMarkup += '</div>';



        $('.alert_next_alliance').parent().append(btnMarkup);



        $('.alert_notify_alliance').first().parent().prepend(optionsBtnMarkup);




        $('#openAllianceShareOptions').click(() => {

            $('#allianceShareOptions').show();

            $('#openAllianceShareOptions').hide();

        });




        $('.customAllianceShareText').click(function() {

            $('#allianceShareText').val($(this).text());

        });




        if (jumpNext) {

            $('.alert_notify_alliance').append('<span style="margin-left: 5px;" class="glyphicon glyphicon-arrow-right"></span>');

        }



        $('.alert_notify_alliance').click(processAllianceShare);



    };



    // Add Keylisteners

    const initKeys = () => {

        if (enableKeyboard) {

            let keys = [];



            $(document).keydown((e) => {

                keys.push(e.which);

                if (keys.length >= shortcutKeys.length) {

                    let pressedAll = true;

                    $.each(shortcutKeys, (index, value) => {

                        if (keys.indexOf(value) < 0) {

                            pressedAll = false;

                            return;

                        }

                    });

                    if (pressedAll) {

                        // Is there an extra key pressed?

                        if (keys.length > shortcutKeys.length) {

                            // Remove regular (expected pressed) keys from list

                            let extraKey = keys.filter((el) => !shortcutKeys.includes(el));

                            // As number 9 key has value 48, substract that to get an expected key (value) range from 1-9

                            extraKey = extraKey[extraKey.length - 1] - 48;

                            // If the extra button has the (value) number 1-9,

                            // and the message array as a corresponding number of messages, select it

                            if (extraKey > 0 && extraKey <= 10 && extraKey <= messages.length) {

                                $('#allianceShareText').val(messages[extraKey - 1]);

                            }

                        }



                        processAllianceShare();



                    }

                }

            });



            $(document).keyup((e) => {

                keys.splice(keys.indexOf(e.which));

            });

        }

    };



    const processAllianceShare = () => {



        $('#allianceShareOptions').hide();

        $('#openAllianceShareOptions').show();



        const sendToAlliance = $('#postToChat').is(':checked') ? 1 : 0;

        const missionShareLink = $('#mission_alliance_share_btn').attr('href');

        const missionId = missionShareLink.replace('/missions/', '').replace('/alliance', '');

        const csrfToken = $('meta[name="csrf-token"]').attr('content');

        const message = $('#allianceShareText').val();



        $('.alert_notify_alliance').html('Teilen..');

        $.get('/missions/' + missionId + '/alliance', () => {

            $('.alert_notify_alliance').html('Chatten..');

            $.post("/mission_replies", {
                authenticity_token: csrfToken,
                mission_reply: {
                    alliance_chat: sendToAlliance,
                    content: message,
                    mission_id: missionId
                }
            }, (data, status, xhr) => {

                $('.alert_notify_alliance').html('Alarmieren..');

                if (jumpNext) {

                    $('.alert_next').first().click();

                } else {

                    $('#mission_alarm_btn').click();

                }

            });

        });



    };



    const transformMessages = () => {

        try {

            // Prepare values for %ADDRESS% and %PATIENTS_LEFT%

            // Possible inputs 'xy street, 1234 city', '1234 city', '123 city | 2' (where 2 is number of patients)

            let addressAndPatrientRow = $('.mission_header_info >> small').first().text().trim();

            addressAndPatrientRow = addressAndPatrientRow.split('|');



            const address = addressAndPatrientRow[0];

            const patientsLeft = addressAndPatrientRow.length === 2 ? addressAndPatrientRow[1] : 0;



            // Prepare values for %MY_CUSTOM_TIME%

            const offsetInHours = 3;

            let customTime = new Date().getHours() + offsetInHours;

            customTime = customTime > 24 ? customTime - 24 : customTime;



            // Prepare required Vehicles

            const alertText = $('.alert-danger');

            const requiredVehiclesIdentifier = 'Zusätzlich benötigte Fahrzeuge:';

            let requiredVehicles = 'Keine weiteren Fahrzeuge benötigt.';

            if (alertText && alertText.text().indexOf(requiredVehiclesIdentifier) >= 0) {

                requiredVehicles = alertText.text().trim().substr(requiredVehiclesIdentifier.length, alertText.text().trim().length - 1);

            }



            for (let i = 0; i < messages.length; i++) {

                messages[i] = messages[i].replace('%ADDRESS%', address);

                messages[i] = messages[i].replace('%MY_CUSTOM_TIME%', customTime + ':00 Uhr');

                messages[i] = messages[i].replace('%PATIENTS_LEFT%', patientsLeft);

                messages[i] = messages[i].replace('%REQUIRED_VEHICLES%', requiredVehicles);

            }

        } catch (e) {

            console.log('Error transforming messages: ' + e);

        }

    };



    transformMessages();

    initButtons();

    initKeys();

})();
