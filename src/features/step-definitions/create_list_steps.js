const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { valuesForFields } = require('../../tests/settings');
const { BoardPage } = require('../../po/pages/imports.js');

const boardPage = new BoardPage();


