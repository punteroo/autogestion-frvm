/**
 * Represents an entry within the available courses up for inscription.
 *
 * @type
 */
export type AvailableCourse = {
  /** The career this course belongs to. */
  especialidad: string;

  /** The plan year the student is in for which the current specialty (career) defines this exam's contents. */
  plan: string;

  /** The course's code. */
  codigoMateria: string;

  /** The course's name. */
  nombre: string;

  /** The course's name, full and not sliced. */
  nombreLargo: string;

  /** The commission this specific course inscription belongs to. */
  comisionActual: string;

  /** The unique course identifier. This property is null if the student hasn't enrolled to this course. */
  cursoActual: string | null;

  /** An homogenous career code, used to track which commission the student is enrolled in. This property is `"0"` if the student hasn't enrolled to this course. */
  especialidadHomogenea: string;

  /** An homogenous plan code, used to track which commission the student is enrolled in. This property is `"0"` if the student hasn't enrolled to this course. */
  planHomogenea: string;

  /** An homogenous course code, used to track which commission the student is enrolled in. This property is `"0"` if the student hasn't enrolled to this course. */
  materiaHomogenea: string;

  /**
   * The course's level in the career's academic plan.
   *
   * Engineering careers have 5 levels, while others have 3.
   */
  anio: string;

  /** The schedule where this course is taken. This property is null if the student hasn't enrolled to this course. */
  horarioCursado: string | null;

  /** The name of the building where the course is taken. This property is null if the student hasn't enrolled to this course. */
  edificio: string | null;

  /** An auto-generated code that represents the enrollment into the course. This property is null if the student hasn't enrolled to this course. */
  checksum: string | null;

  /** Unknown property. This property is always null. */
  impreso: null;

  /** Unknown property. This property is always null. */
  auditoria: null;

  /** Unknown property. This property is always null. */
  condicion: null;

  /** Unknown. Known values are `true` or `false` as strings. */
  condicional: string;
};

/**
 * A commission where a course is available to be enrolled in by the student.
 *
 * @type
 */
export type AvailableCourseCommission = {
  /** An ID indicating the commission available (in order) for the course. */
  comision: string;

  /** An unique identifier for the specific course commission. */
  curso: string;

  /** A visual string that holds the course's schedule for that specific commission. */
  horario: string;

  /** The specific career this comission is from. Courses can be partaken in multiple careers. */
  especialidad: string;

  /** The plan year this course is from the career it belongs to. */
  plan: string;

  /** The course's ID respective to its career. */
  materia: string;

  /** The building/room this class is taken within the university, physically. */
  edificio: string;

  /** The career name, with leading whitespaces. */
  nombreEspecialidad: string;
};

/**
 * Request payload used to enroll a student into a course comission.
 *
 * This can later be undone by nulling the enrollment.
 *
 * @interface
 */
export interface EnrollCoursePayload {
  /** The career ID where the course belongs to. */
  especialidad: string;

  /** The plan year this course has for the specific career. */
  plan: string;

  /** The course's unique ID. */
  materia: string;

  /** The specific commission order ID selected to enroll the student into. */
  comision: string;

  /** The full course payload where the inscription is taking place. */
  detalleMateria: AvailableCourse;
}

/**
 * Response payload for enrolling a student into a course comission.
 *
 * @interface
 */
export interface EnrollCourseResponse {
  /** Object that contains details about the enrollment. */
  cursado: {
    /** An unique checksum used to identify the inscription to the course in said commission. */
    checksum: string;

    /** The course's schedule. */
    horario: string;

    /** The physical place the course is taken within the university. */
    edificio: string;
  };

  /** The course ID where the student enrolled. */
  materia: string;

  /** The specific commission ID where the student enrolled in. */
  comision: string;
}

/**
 * Request payload used to unenroll a student from a course comission.
 *
 * @interface
 */
export interface UnenrollCoursePayload {
  /** The homogenous career code within the enrolled course, usually `especialidadHomogenea`. */
  especialidad: string;

  /** The homogenous plan code within the enrolled course, usually `planHomogenea`. */
  plan: string;

  /** The homogenous course code within the enrolled course, usually `materiaHomogenea`. */
  materia: string;

  /** The commission ID the student had enrolled into this course for. */
  comision: string;

  /** The full course payload where the unenrollment is going for. */
  detalleMateria: AvailableCourse;
}

/**
 * Response payload for unenrolling a student from a course comission.
 *
 * @interface
 */
export interface UnenrollCourseResponse {
  /** The result of the unenrollment. */
  resultado: boolean;

  /** A visual message that informs of the result. */
  mensaje: string;
}
