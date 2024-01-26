#!/usr/bin/python3
"""
    Script to list State contain letter a from database hbtn_0e_0_usa

    ARGUMENTS :
            mysql username = user
            mysql password = pswd
            database name = db_name
    SORTED BY :
        ASC states.id
"""

import sys
from sqlalchemy import (create_engine)
from sqlalchemy.orm import sessionmaker
from model_state import Base, State

if __name__ == "__main__":
    # Recover argument from user
    user = sys.argv[1]
    pswd = sys.argv[2]
    db_name = sys.argv[3]

    # create bd
    engine = create_engine(
        'mysql+mysqldb://{}:{}@localhost/{}'
        .format(user,
                pswd,
                db_name),
        pool_pre_ping=True
    )
    # function to create all tables in the bd engine
    Base.metadata.create_all(engine)

    # create session to save in bd
    Session = sessionmaker(bind=engine)
    session = Session()

    # query + construct string response
    # if no answer print Nothing
    query = session.query(State)\
        .filter(State.name.like('%a%'))\
        .order_by(State.id)
    for row in query:
        print(str(row.id) + ': ' + row.name)

    session.close()
