import React, {useReducer} from "react";
import axios from 'axios';
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

import { SEARCH_USERS,SET_LOADING } from "../types";