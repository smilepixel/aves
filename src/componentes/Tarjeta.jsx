import './Terjeta_1.css'
import clip from './imagenes-videos/aves_2.JPG';
import { Ui_1 } from './Ui/Ui_1';
import { Ui_2 } from './Ui/Ui_2';
import { Ui_3 } from './Ui/Ui_3';

export const Tarjeta = ({titulo}) => {

return (
    <>

<div class="mb-2 bg-white text-dark rounded-5" id='div_2_1'>

<div id='D_dive0'>

<div id='D_dive1'>


<div class='div_2_2 bg-info-subtle'>
<p> <span id='span_1'>{titulo}</span><br/>nombre cientifico: (Psittacara strenuus)<br/>Orden:	Psittaciformes | Familia:	Psittacidae</p>
</div>

<div class='div_2_2 bg-info'>
<p id='P_1'>La dieta de estos periquitos no se ha documentado por completo,<br/> pero se sabe que incluye semillas y frutas. Puede ser una plaga de cultivos.<br/> Las bandadas pueden superar los 100 individuos.</p>
</div>


</div>



</div>




<div class="mb-2 bg-white text-dark rounded-5 d-flex flex-directon-row justifi-content-center" id='div_3'>


<div id='D_dive2'>


<div class='dive' >
<img id='imagen_1' class="card-img-top rounded-5" src={clip} alt="clip" />
</div>

<div class='dive'>
<Ui_2
T_1={"según la Lista Roja de la UICN"}

T_2={"preocupación menor"}
/>

<Ui_2
T_1={"Distribución y hábitat"}

T_2={"desde Oaxaca México hasta el centro de Nicaragua."}
/>
</div>


</div>



</div>  

<div id='div_4'>
<Ui_1
T_1={"habitat"}

T_2={"selva"}
/>

<Ui_1
T_1={"dieta"}

T_2={"semillas y frutas"}
/>

<Ui_1
T_1={"esperanza de vida"}

T_2={"10 - 15 años"}
/>

<Ui_1
T_1={"tamaño"}

T_2={"32cm de largo"}
/>
</div>


<div class='div_6'>
<h2 id='T_1'> curiosidades </h2>
</div>
<div class='div_6'>
<Ui_3
T_1={"habita aqui en guatemala y la he visto muchas veces"}
/>

<Ui_3
T_1={"una conocida-amiga tiene esta especie de mascota"}
/>
</div>



</div>
    </>

);
}
