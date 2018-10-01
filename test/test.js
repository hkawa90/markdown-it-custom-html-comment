"use strict";
var assert = require('assert');

describe('CustomComment_plugin', function () {
    describe('pagebreak', function () {
        it('inline_custom_comment with html-mode', function () {
            var md = require('markdown-it')({
                html: true
              });
            md.use(require('../index.js'), 'pagebreak', {
                render: function (tokens, idx) {
                    var m = tokens[idx].info.trim().match(/pagebreak/);
                    if (m) {
                        return '<div style="page-break-before:always"></div>'
                    }
                    return '';
                }
            });
            assert.equal(md.render('<!-- pagebreak -->'), '<div style="page-break-before:always"></div>');
        });
        it('inline_custom_comment with non html-mode', function () {
            var md = require('markdown-it')({
                html: false
              });
            md.use(require('../index.js'), 'pagebreak', {
                render: function (tokens, idx) {
                    var m = tokens[idx].info.trim().match(/pagebreak/);
                    if (m) {
                        return '<div style="page-break-before:always"></div>'
                    }
                    return '';
                }
            });
            assert.equal(md.render('<!-- pagebreak -->'), '<div style="page-break-before:always"></div>');
        });
    });
});