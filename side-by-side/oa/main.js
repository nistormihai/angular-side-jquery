let counter = 0;
const createMore = () =>
  $('#jquery-container').append(`<div>More${'.'.repeat(++counter)}</div>`);
window.createMore = createMore;

$(() => {
  const title = $('<button>jQuery rules!!!</button>').on('click', createMore);
  $('#jquery-container')
    .append(title)
    .append('<app-sidebar>Nothing</app-sidebar>');
  
});

