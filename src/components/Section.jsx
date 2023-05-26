import './Section.css';

function Section() {
  return (
   <div className="video">
    <div className='video-title'>
        <h2>Videos</h2>
    <div/>
    <div className="videos-button">
        <ul>
            <li><a href="https://www.youtube.com/watch?v=zjK3yr1tmSQ&list=PL_0iwlJ-do5pGyDwTiDjegsSCeN5G0fzs" target='_blank' rel="noreferrer"><button>Culto de Domingo</button></a></li>
            <li><a href="https://www.youtube.com/watch?v=S9FSvJzWYOU&list=PL_0iwlJ-do5or4MmlBv5bhurDLQClnft1&index=29" target='_blank' rel="noreferrer"><button>Culto de Jovens</button></a></li>
            <li><a href="https://www.youtube.com/watch?v=IXSj2GNh8xE&list=PL_0iwlJ-do5pAXjCp8rCJgv-u-Dchuqxm" target='_blank' rel="noreferrer"><button>Devocional JM</button></a></li>
            <li><a href="https://www.youtube.com/watch?v=FPsrs2rjwWI&list=PL_0iwlJ-do5p4CtXJpOahJmdAOPpClKYP&index=55" target='_blank' rel="noreferrer"><button>Hora da história</button></a></li>
            <li><a href="https://www.youtube.com/watch?v=vgEdqkp4sIg&list=PL_0iwlJ-do5ojITw52X4kmW1jCdfeox56&index=29" target='_blank' rel="noreferrer"><button>Noite da Esperança</button></a></li>
        </ul>
        </div>
    </div>
    </div>
  );
}

export default Section;