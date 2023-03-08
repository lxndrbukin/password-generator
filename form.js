const container = document.querySelector('.container');

const form = () => {
  return /*html*/ `
    <div class='password-form'>
      <div class='header'>
        <h1>Generate a 
          <span class='header_accent'>
            random password
          </span>
        </h1>
      </div>
      <div class='password-settings'>
        <div class='chars-num'>
          <input type='button' class='chars-num_set minus btn' value='-' />
          <input type='number' min='5' class='chars-num_input' value='5' />
          <input type='button' class='chars-num_set plus btn' value='+' />
        </div>
        <input type='button' value='Generate Password' class='generate btn' />
      </div>
      <hr>
      <div class='password'>
        <label>Generated Password</label>
        <input class='generated-password' type='text'/>
        <div class='copied'></div>
      </div>
    </div>
  `;
};

container.innerHTML += form();
