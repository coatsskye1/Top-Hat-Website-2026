// Renders the tutor directory from TUTORS (see tutors-data.js)
// and wires up the subject/town/name filters.
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('tutor-grid');
  const subjectSelect = document.getElementById('filter-subject');
  const townSelect = document.getElementById('filter-town');
  const searchInput = document.getElementById('filter-search');
  const clearBtn = document.getElementById('filter-clear');
  const resultsCount = document.getElementById('filter-results-count');

  if (!grid || typeof TUTORS === 'undefined') return;

  const AVATAR_COLORS = ['#1b2534', '#2c3a52', '#c9a24b', '#7a8194'];

  function initials(name) {
    return name
      .split(' ')
      .filter(Boolean)
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  function colorFor(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
  }

  function uniqueValues(list) {
    return [...new Set(list)].sort();
  }

  function populateFilters() {
    const allSubjects = uniqueValues(TUTORS.flatMap((t) => t.subjects));
    const allTowns = uniqueValues(TUTORS.flatMap((t) => t.towns));

    allSubjects.forEach((s) => {
      const opt = document.createElement('option');
      opt.value = s;
      opt.textContent = s;
      subjectSelect.appendChild(opt);
    });

    allTowns.forEach((t) => {
      const opt = document.createElement('option');
      opt.value = t;
      opt.textContent = t;
      townSelect.appendChild(opt);
    });
  }

  function tutorCard(tutor) {
    const card = document.createElement('div');
    card.className = 'tutor-card';

    const photoWrap = document.createElement('div');
    photoWrap.className = 'tutor-photo-wrap';

    if (tutor.photo) {
      const img = document.createElement('img');
      img.src = tutor.photo;
      img.alt = tutor.name;
      img.className = 'tutor-photo';
      photoWrap.appendChild(img);
    } else {
      const avatar = document.createElement('div');
      avatar.className = 'tutor-avatar';
      avatar.style.background = colorFor(tutor.name);
      avatar.textContent = initials(tutor.name);
      photoWrap.appendChild(avatar);
    }

    const name = document.createElement('h3');
    name.textContent = tutor.name;

    const grades = document.createElement('p');
    grades.className = 'tutor-grades';
    grades.textContent = tutor.grades || '';

    const tags = document.createElement('div');
    tags.className = 'tutor-tags';
    tutor.subjects.forEach((s) => {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = s;
      tags.appendChild(tag);
    });

    const towns = document.createElement('p');
    towns.className = 'tutor-towns';
    towns.innerHTML =
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>';
    const townsText = tutor.towns.join(', ') + (tutor.online ? ' · Online available' : '');
    towns.appendChild(document.createTextNode(townsText));

    const bio = document.createElement('p');
    bio.className = 'tutor-bio';
    bio.textContent = tutor.bio || '';

    card.append(photoWrap, name, grades, tags, towns, bio);
    return card;
  }

  function render() {
    const subject = subjectSelect.value;
    const town = townSelect.value;
    const search = searchInput.value.trim().toLowerCase();

    const filtered = TUTORS.filter((t) => {
      const matchSubject = subject === 'all' || t.subjects.includes(subject);
      const matchTown = town === 'all' || t.towns.includes(town);
      const matchSearch = !search || t.name.toLowerCase().includes(search);
      return matchSubject && matchTown && matchSearch;
    });

    grid.innerHTML = '';

    if (filtered.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'no-results';
      empty.textContent = 'No tutors match those filters. Try clearing a filter or searching a different subject/town.';
      grid.appendChild(empty);
    } else {
      filtered.forEach((t) => grid.appendChild(tutorCard(t)));
    }

    if (resultsCount) {
      resultsCount.textContent = `Showing ${filtered.length} of ${TUTORS.length} tutor${TUTORS.length === 1 ? '' : 's'}`;
    }
  }

  populateFilters();
  render();

  [subjectSelect, townSelect, searchInput].forEach((el) => {
    el.addEventListener('input', render);
    el.addEventListener('change', render);
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      subjectSelect.value = 'all';
      townSelect.value = 'all';
      searchInput.value = '';
      render();
    });
  }
});
