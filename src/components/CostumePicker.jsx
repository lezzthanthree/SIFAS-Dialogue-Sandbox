import { useState, useContext } from "react";
import data from "../characters.json";
import loadImage from "../js/loadImage";
import { useTranslation } from "react-i18next";
import { AppContext } from "../AppContext";

const CostumePicker = ({ sprites, setSprites, currentLayer }) => {
    const [show, setShow] = useState(false);
    const { idDebug } = useContext(AppContext);

    const { t } = useTranslation();
    return (
        <>
            {show && (
                <div
                    id="picker"
                    onClick={() => {
                        setShow(false);
                    }}
                >
                    <button
                        id="picker-close"
                        className="icon btn-white"
                        onClick={() => {
                            setShow(false);
                        }}
                    >
                        <i className="bi bi-x-lg icon-btn"></i>
                    </button>

                    {sprites[currentLayer].position == "front"
                        ? data[sprites[currentLayer].character].costumes.map(
                              (cos) => {
                                  return (
                                      <div
                                          key={cos}
                                          className="relative center picker-div"
                                      >
                                          {idDebug && (
                                              <p className="id-debug absolute white">
                                                  {cos}
                                              </p>
                                          )}
                                          <img
                                              className="picker-item costume-picker-item"
                                              src={`/img/sprites/${sprites[currentLayer].character}/${cos}_0.png`}
                                              onClick={async () => {
                                                  const bodyImage =
                                                      await loadImage(
                                                          `/img/sprites/${sprites[currentLayer].character}/${cos}_0.png`,
                                                          "Changed sprite: body"
                                                      );
                                                  const expressionImage =
                                                      await loadImage(
                                                          `/img/sprites/${sprites[currentLayer].character}/${cos}_1.png`,
                                                          "Changed sprite: face"
                                                      );
                                                  setSprites({
                                                      ...sprites,
                                                      [currentLayer]: {
                                                          ...sprites[
                                                              currentLayer
                                                          ],
                                                          costume: cos,
                                                          bodyImage: bodyImage,
                                                          expressionImage:
                                                              expressionImage,
                                                      },
                                                  });
                                                  setShow(false);
                                              }}
                                          />
                                      </div>
                                  );
                              }
                          )
                        : data[sprites[currentLayer].character].back.map(
                              (cos) => {
                                  return (
                                      <img
                                          key={cos}
                                          className="picker-item costume-picker-item"
                                          src={`/img/sprites_back/${sprites[currentLayer].character}/${cos}_0.png`}
                                          onClick={async () => {
                                              const bodyImage = await loadImage(
                                                  `/img/sprites_back/${sprites[currentLayer].character}/${cos}_0.png`,
                                                  "Changed sprite: body"
                                              );
                                              const expressionImage = null;
                                              setSprites({
                                                  ...sprites,
                                                  [currentLayer]: {
                                                      ...sprites[currentLayer],
                                                      costume: cos,
                                                      bodyImage: bodyImage,
                                                      expressionImage:
                                                          expressionImage,
                                                  },
                                              });
                                              setShow(false);
                                          }}
                                      />
                                  );
                              }
                          )}
                </div>
            )}
            <div className="relative center picker-div">
                {idDebug && (
                    <p className="id-debug absolute white">
                        {sprites[currentLayer].costume}
                    </p>
                )}
                <img
                    src={sprites ? sprites[currentLayer].bodyImage.src : ""}
                    id="costume-picker"
                    className="image-picker setting"
                    onClick={() => {
                        if (sprites[currentLayer].character == "custom") {
                            alert(t("custom-sprite-warn"));
                            return;
                        }
                        setShow(!show);
                    }}
                />
            </div>
        </>
    );
};

export default CostumePicker;
