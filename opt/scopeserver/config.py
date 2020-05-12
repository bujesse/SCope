# -*- coding: utf-8 -*-
""" Server configuration handling. """

from typing import Dict, Optional, Union
from pathlib import Path
from collections import defaultdict
import json
import secrets

Config = Dict[str, Union[str, int, bool]]

def default_validator():
    """ The default validator does not check its argument, assumes it is valid. """
    return lambda arg: True

def validate(config: Config) -> Config:
    """ Check a config has valid keys and values. """

    validators = defaultdict(default_validator,
                             [("dataHashSecret", lambda secret: not secret.isspace())])

    return {key: value
            for key, value in config.items()
            if validators[key](value)}


def defaults() -> Config:
    """ Default configuration values. """
    return {
        "app_mode": True,
        "debug": True,
        "pPort": 55851,
        "xPort": 55852,
        "gPort": 55853,
        "dataHashSecret": secrets.token_hex(32),
    }


def from_string(config: str) -> Config:
    """ Read configuration from a string. """
    return {**defaults(), **validate(json.loads(config))}

def from_file(config_filename: Optional[Union[Path, str]]) -> Config:
    """
    Read configuration from a provided file.
    If the configuration filename is not provided. Returns default values.
    """

    if config_filename is not None:
        with open(config_filename) as config_file:
            return from_string(config_file.read())

    return defaults()
