package errors

import (
	"net/http"
	"strconv"
	"strings"
)

const template = `<!DOCTYPE html>
<html>
<head>
    <title>TITLE</title>
    <style>
    html {
        background-color: #2196f3;
        color: #fff;
        font-family: sans-serif;
    }
    code {
        background-color: rgba(0,0,0,0.1);
        border-radius: 5px;
        padding: 1em;
        display: block;
        box-sizing: border-box;
    }
    .center {
        max-width: 40em;
        margin: 2em auto 0;
    }
    a {
        text-decoration: none;
        color: #eee;
        font-weight: bold;
    }
    </style>
</head>

<body>
    <div class="center">
        <h1>TITLE</h1>

        <p>Try reloading the page or hitting the back button. If this error persists, it seems that you may have found a bug! Please create an issue at <a href="https://github.com/hacdias/caddy-filemanager/issues">hacdias/caddy-filemanager</a> repository on GitHub with the code below.</p>

        <code>CODE</code>
    </div>
</html>`

// PrintHTML prints the error page
func PrintHTML(w http.ResponseWriter, code int, err error) (int, error) {
	tpl := template
	tpl = strings.Replace(tpl, "TITLE", strconv.Itoa(code)+" "+http.StatusText(code), -1)
	tpl = strings.Replace(tpl, "CODE", err.Error(), -1)

	_, err = w.Write([]byte(tpl))

	if err != nil {
		return http.StatusInternalServerError, err
	}
	return http.StatusOK, nil
}
