function $(id){
  return document.getElementById(id);
}

function show(id){
  $(id).style.display='block';
}

function hide(id){
  $(id).style.display='none';
}

function err(id,msg){
  $(id).textContent=msg;
}

function setSteps(n){

  for(let i=1;i<=3;i++){

    const el=$('ps'+i);

    el.classList.remove('active','done');

    if(i<n) el.classList.add('done');

    else if(i===n) el.classList.add('active');
  }
}

function go2(){

  const fn=$('fname').value.trim();
  const ln=$('lname').value.trim();
  const si=$('sid').value.trim();
  const em=$('email').value.trim();

  let ok=true;

  err('e-fname',fn?'':'Required');
  err('e-lname',ln?'':'Required');
  err('e-sid',si?'':'Required');
  err('e-email',em.includes('@')?'':'Invalid email');

  if(!fn || !ln || !si || !em.includes('@')){
    ok=false;
  }

  if(!ok) return;

  hide('s1');
  show('s2');

  setSteps(2);
}

function back1(){

  hide('s2');
  show('s1');

  setSteps(1);
}

function toggleCourse(el){

  const cb=el.querySelector('input');

  const checked=document.querySelectorAll('#course-grid input:checked');

  if(!cb.checked && checked.length>=4){
    return;
  }

  el.classList.toggle('selected',cb.checked);

  $('chosen-count').textContent=
    document.querySelectorAll('#course-grid input:checked').length;
}

function go3(){

  const courses=[
    ...document.querySelectorAll('#course-grid input:checked')
  ].map(c=>c.value);

  err('e-courses',courses.length?'':'Select at least one course');

  if(!courses.length) return;

  $('review-rows').innerHTML=`

    <div class="review-row">
      <div class="review-key">Name</div>
      <div>${$('fname').value} ${$('lname').value}</div>
    </div>

    <div class="review-row">
      <div class="review-key">ID</div>
      <div>${$('sid').value}</div>
    </div>

    <div class="review-row">
      <div class="review-key">Courses</div>
      <div>
        ${courses.map(c=>`<span class="tag">${c}</span>`).join('')}
      </div>
    </div>
  `;

  hide('s2');
  show('s3');

  setSteps(3);
}

function back2(){

  hide('s3');
  show('s2');

  setSteps(2);
}

function submitForm(){

  alert('Registration Submitted Successfully');

  location.reload();
}