


class TeamRow extends HTMLTableRowElement {
     constructor() {
         super();
         var shadow = this.attachShadow({mode: 'open'});
         var hoverTable = document.createElement('span');
         hoverTable.setAttribute('class','hoverTable');

         var style = document.createElement('style');
         style.textContent = '.hoverTable{ ' +
                              '  width:100%; ' +
                              '		border-collapse:collapse; ' +
                             ' 	} ' +
                              '	.hoverTable td{ ' +
                              '		padding:7px; border:#4e95f4 1px solid; ' +
                              '	} ' +
                              '	.hoverTable tr{ ' +
                              '		background: #b8d1f3; ' +
                              '	} ' +
                              '    .hoverTable tr:hover { ' +
                              '          background-color: #ffff99; ' +
                              '    }';
          shadow.appendChild(style);
          shadow.appendChild(hoverTable);
      }
   }

   customElements.define('team-row', TeamRow, { extends: 'tr' });