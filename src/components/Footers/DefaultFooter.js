/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://www.renovaesperanca.com.br"
                  target="_blank"
                >
                  Renova Esperança
                </a>
              </li>
              <li>
                <a
                  href="http://https://www.renovaesperanca.com.br"
                  target="_blank"
                >
                  Sobre nós
                </a>
              </li>
              <li>
                <a
                  href="http://https://www.renovaesperanca.com.br"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            <a
              href="https://www.dmsec.com.br"
              target="_blank"
            >
              DMSec
            </a>
            . Coded by{" "}
            <a
              href="https://www.dmsec.com.br"
              target="_blank"
            >
              @douglasmsi
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
