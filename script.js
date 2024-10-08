document.getElementById('editButton').addEventListener('click', function() {
    const name = prompt("Introduce tu nombre:", document.getElementById('name').textContent);
    if (name) {
        document.getElementById('name').textContent = name;
    }

    const description = prompt("Introduce una descripción breve:", document.getElementById('description').textContent);
    if (description) {
        document.getElementById('description').textContent = description;
    }

    const experience = prompt("Introduce tu experiencia laboral (separa con comas):", "Experiencia 1, Experiencia 2");
    if (experience) {
        const expList = experience.split(',');
        const expUl = document.getElementById('experience');
        expUl.innerHTML = '';
        expList.forEach(exp => {
            const li = document.createElement('li');
            li.textContent = exp.trim();
            expUl.appendChild(li);
        });
    }

    const education = prompt("Introduce tu educación (separa con comas):", "Educación 1, Educación 2");
    if (education) {
        const eduList = education.split(',');
        const eduUl = document.getElementById('education');
        eduUl.innerHTML = '';
        eduList.forEach(edu => {
            const li = document.createElement('li');
            li.textContent = edu.trim();
            eduUl.appendChild(li);
        });
    }
});
