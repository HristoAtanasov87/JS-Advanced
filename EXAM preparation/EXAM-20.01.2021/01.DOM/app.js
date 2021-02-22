function solve() {
   const postsRef = document.querySelector('.site-content>main>section');
   console.log(postsRef);
   const creator = document.getElementById('creator');
   const title = document.getElementById('title');
   const category = document.getElementById('category');
   const content = document.getElementById('content');
   document.querySelector('form>button').addEventListener('click', addPost);

   const archiveSection = document.querySelector('.archive-section>ol');

   function addPost(ev) {
      ev.preventDefault();
      const articleElement = e('article');
      const h1Element = e('h1', `${title.value}`);
      articleElement.appendChild(h1Element);

      const pOneElement = e('p');
      pOneElement.innerHTML = `Category:<strong>${category.value}</strong>`;
      articleElement.appendChild(pOneElement);

      const pTwoElement = e('p');
      pTwoElement.innerHTML = `Creator:<strong>${creator.value}</strong>`;
      articleElement.appendChild(pTwoElement);

      const pThreeElement = e('p', content.value);
      articleElement.appendChild(pThreeElement);

      const divElement = e('div', undefined, 'class', 'buttons');
      const buttonDelete = e('button', 'Delete', 'class', 'btn');
      buttonDelete.classList.add('delete');
      buttonDelete.addEventListener('click', deletePost);

      const buttonArchive = e('button', 'Archive', 'class', 'btn');
      buttonArchive.classList.add('archive');
      buttonArchive.addEventListener('click', archivePost);

      divElement.appendChild(buttonDelete);
      divElement.appendChild(buttonArchive);

      articleElement.appendChild(divElement);
      postsRef.appendChild(articleElement);
   }

   function deletePost(ev) {
      ev.target.parentNode.parentNode.remove();
   }

   function archivePost(ev) {
      const newArticle = e('li', ev.target.parentNode.parentNode.children[0].textContent);
      ev.target.parentNode.parentNode.remove();
      archiveSection.appendChild(newArticle);

      const toSort = Array.from(archiveSection.children);
      toSort.sort((a, b) => {
         return a.textContent.localeCompare(b.textContent);
      });

      toSort.forEach(el => archiveSection.appendChild(el));

   }

   function e(tag, text, attribute, attributeValue) {
      const el = document.createElement(tag);

      if (attribute !== undefined && attributeValue !== undefined) {
         el.setAttribute(attribute, attributeValue);
      }

      if (text !== undefined) {
         el.textContent = text;
      }

      return el;
   }

}
